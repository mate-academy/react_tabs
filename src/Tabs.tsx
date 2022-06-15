import React from 'react';

interface Props {
  selectedTabId: string,
  onTabSelected: (id: string) => void,
  tabs: Tab[],
  selectedTab: Tab,
}

export const Tabs: React.FC<Props> = ({
  selectedTabId,
  onTabSelected,
  tabs,
  selectedTab,
}) => {
  return (
    <div>
      <div>
        {tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            onClick={() => {
              if (selectedTabId !== tab.id) {
                onTabSelected(tab.id);
              }
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>
      {selectedTab.content}
    </div>
  );
};
