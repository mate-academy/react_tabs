import React from 'react';

type Props = {
  tabs: Tab[],
  onTabSelected: (tab: string) => void,
  selectedTabId: string,
};

export const Tabs: React.FC<Props> = React.memo(({
  tabs, onTabSelected, selectedTabId,
}) => {
  return (
    <div>
      {tabs.map(tab => (
        <button
          key={tab.id}
          type="button"
          onClick={() => {
            onTabSelected(tab.id);
          }}
          style={{
            backgroundColor: selectedTabId === tab.id ? 'blue' : 'yellow',
          }}
        >
          {tab.title}
        </button>
      ))}
    </div>

  );
});
