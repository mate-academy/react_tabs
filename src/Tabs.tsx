import React from 'react';
import { Tab } from './types/Tab';

type Props = {
  tabs: Tab[];
  selectedTabId: Tab;
  onTabSelected: (tabId: Tab) => void;
};

export const Tabs: React.FC<Props> = (
  {
    tabs,
    selectedTabId,
    onTabSelected,
  },
) => {
  return (
    <div>
      {tabs.map(tab => (
        <button
          type="button"
          key={tab.id}
          onClick={() => onTabSelected(tab)}
        >
          {tab.title}
        </button>
      ))}

      <p data-cy="tab-content">
        {selectedTabId.content}
      </p>
    </div>
  );
};
