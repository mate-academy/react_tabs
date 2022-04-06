import React from 'react';

type Props = {
  tabs: Tab[],
  onTabSelected: (tab: Tab) => void,
  selectedTab: Tab
};

export const Tabs: React.FC<Props> = React.memo(({
  tabs, onTabSelected, selectedTab,
}) => {
  return (
    <div>
      {tabs.map(tab => (
        <button
          key={tab.id}
          type="button"
          onClick={() => {
            onTabSelected(tab);
          }}
          style={{
            backgroundColor: selectedTab === tab ? 'blue' : 'yellow',
          }}
        >
          {tab.title}
        </button>
      ))}
    </div>

  );
});
