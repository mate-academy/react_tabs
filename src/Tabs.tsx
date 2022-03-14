import React from 'react';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <>
      <div className="App__butons">
        {tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            onClick={() => {
              if (tab.id !== selectedTab.id) {
                onTabSelected(tab);
              }
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <p>
        {selectedTab.content}
      </p>
    </>
  );
};
