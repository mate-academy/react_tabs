import React, { useState } from 'react';

type Tab = {
  id: string,
  title: string,
  content: string,
};

type Props = {
  tabs: Tab[]
};

export const Tabs: React.FC<Props> = ({ tabs }) => {
  const [selectedTab, setToggle] = useState(tabs[0]);

  const selectedTabId: Tab = tabs.find(
    tab => selectedTab.id === tab.id,
  ) || tabs[0];

  const chooseTab = (tab: Tab) => {
    if (selectedTab.id !== tab.id) {
      setToggle(tab);
    }
  };

  return (

    <>
      <h1 className="title">
        Selected tab is
        {' '}
        {selectedTab.title}
      </h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => (
              <li
                key={tab.id}
                className={selectedTab.id === tab.id ? 'is-active' : ''}
                data-cy={selectedTab.id === tab.id ? 'tab-content' : 'Tab'}
              >
                <a
                  href={tab.id}
                  data-cy="TabLink"
                  onClick={(e) => {
                    chooseTab(tab);
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
          {selectedTabId.content}
        </div>
      </div>
    </>
  );
};
