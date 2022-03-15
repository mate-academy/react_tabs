import React from 'react';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onSelectedTab: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onSelectedTab,
}) => {
  return (
    <div>
      {tabs.map(tab => (
        <button
          type="button"
          value={selectedTabId}
          onClick={() => {
            if (selectedTabId !== tab.id) {
              onSelectedTab(tab);
            }
          }}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};
