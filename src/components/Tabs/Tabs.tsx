import React, { useState } from 'react';

export interface Tab {
  id: string,
  title: string,
  content: string,
}

type Props = {
  tabs: Tab[]
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const [toggleState, setToggle] = useState(tabs[0]);

  const chooseTab = (tab: Tab) => {
    setToggle(tab);
  };

  const selectedTab: Tab = tabs.find(
    tab => toggleState.id === tab.id,
  ) || tabs[0];

  const tabClick = (tab: Tab) => {
    if (toggleState.id !== tab.id) {
      chooseTab(tab);
    }
  };

  return (

    <>
      <h1 className="title">
        Selected tab is
        {' '}
        {toggleState.title}
      </h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => (
              <li
                key={tab.id}
                className={toggleState.id === tab.id ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={(e) => {
                    tabClick(tab);
                    e.preventDefault();
                  }}
                >
                  {tab.title}
                </a>
              </li>

            ))}
          </ul>

        </div>

        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      </div>
    </>
  );
};
