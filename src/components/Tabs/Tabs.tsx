import classNames from 'classnames';
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
  const result = '';
  const chooseTab = (e:React.MouseEvent<HTMLAnchorElement>,
    tab: Tab) => {
    e.preventDefault();
    if (selectedTab.id === tab.id) {
      result = selectedTab.id === tab.id;

      return;
    }

    setToggle(tab);
  };

  return (

    <>
      <h1 className="title">
        {`Selected tab is ${selectedTab.title}`}
      </h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => (
              <li
                key={tab.id}
                className={classNames(
                  '',
                  {
                    'tab-content': result,
                  },
                )}
                data-cy={result ? 'tab-content' : 'Tab'}
              >
                <a
                  href={tab.id}
                  data-cy="TabLink"
                  onClick={(e) => chooseTab(e, tab)}
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
