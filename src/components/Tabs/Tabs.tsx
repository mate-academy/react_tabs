import { TabContent } from '../TabContent/TabContent';
import classNames from 'classnames';
import { Tab } from '.';
import React from 'react';

type Props = {
  tabs: Tab[];
  onTabSelected: (tabId: Tab) => void;
  selectedTabId: string;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleClickTab = (tab: Tab) => {
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
                'is-active': tab.id === selectedTab.id,
              })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleClickTab(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {selectedTab && <TabContent selectedTab={selectedTab} />}
    </div>
  );
};
