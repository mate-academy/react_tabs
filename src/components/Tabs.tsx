import React from 'react';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => (
  <>
    {tabs.map((tab: Tab) => (
      <button
        type="button"
        key={tab.id}
        onClick={() => {
          if (tab.id !== selectedTabId) {
            onTabSelected(tab);
          }
        }}
      >
        {tab.title}
      </button>
    ))}
    <p>{tabs.find(tab => selectedTabId === tab.id)?.content}</p>
  </>
);
