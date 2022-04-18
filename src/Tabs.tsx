import React from 'react';

type Props = {
  tabs: Tab[],
  onTabSelected: (tab: Tab) => void,
  selectedTabId: string
};

const Tabs: React.FC<Props> = ({ tabs, onTabSelected, selectedTabId }) => {
  const selectedTabContent = tabs.find(
    (tab) => tab.id === selectedTabId,
  )?.content;

  return (
    <>
      {tabs.map((tab) => (
        <button
          type="button"
          onClick={() => {
            onTabSelected(tab);
          }}
        >
          {tab.title}
        </button>
      ))}
      <div>{selectedTabContent}</div>
    </>
  );
};

export default Tabs;
