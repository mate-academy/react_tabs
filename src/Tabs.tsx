import React from 'react';

type Callback = (currentTab: Tab) => void;

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: Callback,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId)
    || tabs[0];

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
      <p data-cy="tab-content">{selectedTab.content}</p>
    </>
  );
};
