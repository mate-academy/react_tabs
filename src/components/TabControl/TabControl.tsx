import React from 'react';

interface Props {
  tab: Tab;
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
}

export const TabControl: React.FC<Props> = React.memo(({
  tab, selectedTabId, onTabSelected,
}) => {
  return (
    <>
      <button
        key={tab.id}
        type="button"
        style={{
          marginRight: '10px',
          backgroundColor: selectedTabId === tab.id ? 'green' : 'red',
        }}
        onClick={() => {
          if (tab.id !== selectedTabId) {
            onTabSelected(tab);
          }
        }}
      >
        {tab.title}
      </button>
    </>
  );
});
