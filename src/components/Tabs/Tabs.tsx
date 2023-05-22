import React from 'react';
import { Tab } from '../../types/Tab';

interface TabsProps {
  tabs: Tab[];
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const handleTabSelect = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  const selectedTab = tabs.find((tab) => tab.id === selectedTabId) || tabs[0];

  const selectedTabContent = tabs
    .find((tab) => tab.id === selectedTabId)?.content;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={selectedTab?.id === tab.id
                ? 'is-active'
                : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabSelect(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabContent}
      </div>
    </div>
  );
};
