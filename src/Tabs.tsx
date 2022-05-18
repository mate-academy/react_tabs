import React from 'react';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <div>
      {tabs.map(tab => (
        <button
          type="button"
          key={tab.id}
          className={tab.id === selectedTabId ? 'button__selected' : 'button'}
          onClick={() => (onTabSelected(tab))}
        >
          {tab.title}
        </button>
      ))}
      <p>{tabs.find(tab => tab.id === selectedTabId)?.content}</p>
    </div>
  );
};
