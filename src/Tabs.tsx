import React from 'react';
import { Tab } from './react-app-env';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const findTabById = (tabId: string): Tab | undefined => {
    return tabs.find(tab => tab.id === tabId);
  };

  const currentTab = findTabById(selectedTabId) || tabs[0];

  return (
    <>
      <div className="tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content" data-cy="tab-content">
        {currentTab.content}
      </div>
    </>
  );
};
