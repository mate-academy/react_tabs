import React from 'react';
import { Tab } from '../../types';

interface TabsProps {
  tabs: Tab[]
  selectedTab: Tab
  onTabSelected: (tab: Tab) => void
}

// eslint-disable-next-line max-len
export const Tabs: React.FC<TabsProps> = ({ tabs, selectedTab, onTabSelected }) => {
  const handleTabClick = (tab: Tab) => {
    if (selectedTab.id !== tab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={selectedTab.id === tab.id ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabClick(tab)}
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
