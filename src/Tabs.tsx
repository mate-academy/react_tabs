import React, { useEffect } from 'react';
import { Tab } from './react-app-env';

interface Props {
  tabs: Tab[];
  selectedTabId: string;
  selectedTab: Tab;
  onTabSelected: (tab: Tab) => void;
  findTabById: (id: string) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  selectedTab,
  onTabSelected,
  findTabById,
}) => {
  useEffect(() => {
    findTabById(selectedTabId);
  }, [selectedTabId]);

  return (
    <>
      <div className="tabs">
        {tabs.map(tab => (
          <button
            type="button"
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content" data-cy="tab-content">
        {selectedTab.content}
      </div>
    </>
  );
};
