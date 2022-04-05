import React from 'react';

type Props = {
  tabs: Tab[],
  selectedTab: Tab,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = React.memo(({
  tabs, selectedTab, onTabSelected,
}) => {
  return (
    <div className="tabs">
      <div className="tabs__list" style={{ marginBottom: '10px' }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            style={{
              marginRight: '10px',
              backgroundColor: tab === selectedTab ? 'green' : 'red',
            }}
            onClick={() => {
              if (tab !== selectedTab) {
                onTabSelected(tab);
              }
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="tabs__content">
        {selectedTab.content}
      </div>
    </div>
  );
});
