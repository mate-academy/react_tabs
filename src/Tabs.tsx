// implement a component here
import React from 'react';

interface Props {
  tabs: Tab[],
  onTabSelect: (tabId: string) => void,
  selectedTabId: string,
}

export const Tabs: React.FC<Props> = ({ tabs, onTabSelect, selectedTabId }) => {
  return (
    <>
      {tabs.map((tab: Tab) => (
        <button
          type="button"
          onClick={() => {
            if (selectedTabId !== tab.id) {
              onTabSelect(tab.id);
            }
          }}
        >
          {tab.title}
        </button>
      ))}
    </>
  );
};
