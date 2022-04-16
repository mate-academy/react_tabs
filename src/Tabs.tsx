import React from 'react';

type Props = {
  tabs: Tab[],
  onTabSelected: (tab: Tab) => void,
  selectedTabId: string
};

const Tabs: React.FC<Props> = ({ tabs, onTabSelected, selectedTabId }) => {
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
      <div>{selectedTabId}</div>
    </>
  );
};

export default Tabs;
