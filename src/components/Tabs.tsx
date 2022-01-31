import React from 'react';
// ({ tabs, selectedTab })

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  return (
    <div className="App__tab-list">
      <div className="App__buttons">
        {tabs.map((tab: Tab) => (
          <button
            type="button"
            key={tab.id}
            onClick={() => onTabSelected(tab)}
            className="App__button"
          >
            {tab.title}
          </button>
        ))}
      </div>
      <p className="App__content">
        {tabs.find((tab) => tab.id === selectedTabId)?.content}
      </p>
    </div>
  );
};
