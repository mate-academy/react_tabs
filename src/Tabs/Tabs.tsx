import React from 'react';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => (
  <div className="Tabs">
    {tabs.map(tab => (
      <button
        className="Tabs__button"
        onClick={
          () => {
            onTabSelected(tab);
          }
        }
        type="button"
        disabled={selectedTabId === tab.id}
      >
        {tab.title}
      </button>
    ))}
    <p className="Tabs__text">
      {tabs.find(tab => (
        tab.id === selectedTabId
      ))?.content}
    </p>
  </div>
);
