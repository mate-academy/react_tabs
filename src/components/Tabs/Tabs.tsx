import React from 'react';
import classNames from 'classnames';

export interface Tab {
  id: string,
  title: string,
  content: string,
}

interface TabsPropsType {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
}

export const Tabs: React.FC<TabsPropsType>
  = ({ tabs, selectedTabId, onTabSelected }) => {
    const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

    const setSelectedTab = (tab: Tab) => {
      if (tab.id !== selectedTabId) {
        onTabSelected(tab);
      }
    };

    return (
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                className={classNames({
                  'is-active': selectedTab.id === tab.id,
                })}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => setSelectedTab(tab)}
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
    );
  };
