import React from 'react';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};
export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <>
      <div className="App__butons">
        {tabs.map(el => (
          <button
            type="button"
            onClick={() => {
              onTabSelected(el);
            }}
          >
            {el.title}
          </button>
        ))}
      </div>
      <span>
        {selectedTab?.content}
      </span>
    </>
  );
};
