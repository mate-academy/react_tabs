import React from 'react';
import { Tab } from '../../types/tab';

interface TabsProps {
  tabs: Tab[];
  selectedTab: Tab;
  handleTabClick: (tab: Tab) => void;
}

export const Tabs: React.FC<TabsProps> = (
  { tabs, selectedTab, handleTabClick },
) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={selectedTab.id === tab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a href={`#${tab.id}`} onClick={() => handleTabClick(tab)} data-cy="TabLink">
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
