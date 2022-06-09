import React from 'react';

type Props = {
  tabs: Tab[],
  selectedTab: Tab,
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  selectedTabId,
  onTabSelected,
}) => (
  <div>
    {tabs.map(tab => (
      <button
        type="button"
        key={tab.id}
        className="btn btn-outline-primary"
        onClick={() => tab.id !== selectedTabId && onTabSelected(tab)}
      >
        {tab.title}
      </button>
    ))}
    <div data-cy="tab-content" className="mt-2 border-bottom border-primary">
      {selectedTab.content}
    </div>
  </div>
);
