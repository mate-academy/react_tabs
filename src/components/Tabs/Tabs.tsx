import React from 'react';
import cn from 'classnames';
import { Tab } from '../../types/types';

interface TabsProps {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = tabs.find((tab) => (
    tab.id === selectedTabId
  )) || tabs[0];

  const selectTab = (tab: Tab) => {
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
              className={cn({ 'is-active': selectedTabId === tab.id })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => selectTab(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {selectedTab.content}
      </div>
    </div>
  );
};

export default Tabs;
