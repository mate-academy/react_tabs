import React, { useEffect } from 'react';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  let selectedTab = tabs.find((tab) => tab.id === selectedTabId);

  useEffect(() => {
    selectedTab = tabs.find((tab) => tab.id === selectedTabId);
  }, [selectedTabId]);

  return (
    <>
      {tabs.map(tab => (
        <button
          type="button"
          key={tab.id}
          onClick={() => onTabSelected(tab)}
        >
          {tab.title}
        </button>
      ))}
      <p>{selectedTab?.content}</p>
    </>
  );
};
