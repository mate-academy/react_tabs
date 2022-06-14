// implement a component here
import React from 'react';

interface Props {
  tabs: Tab[],
  onTabSelect: (tabId: string) => void,
}

export const Tabs: React.FC<Props> = ({ tabs, onTabSelect }) => {
  return (
    <>
      {tabs.map((tab: Tab) => (
        <button
          type="button"
          onClick={() => onTabSelect(tab.id)}
        >
          {tab.title}
        </button>
      ))}
    </>
  );
};
