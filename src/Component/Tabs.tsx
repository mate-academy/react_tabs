import React from 'react';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab:Tab) => void
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => (
  <>
    {tabs.map(tab => (
      <button
        type="button"
        onClick={() => {
          if (selectedTabId !== tab.id) {
            onTabSelected(tab);
          }
        }}
        key={tab.id}
      >
        {tab.title}
      </button>
    ))}
    <p>
      {tabs.find(tab => tab.id === selectedTabId)?.content}
    </p>
  </>
);
