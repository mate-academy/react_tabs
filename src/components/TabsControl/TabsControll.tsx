import React, { memo } from 'react';

interface Props {
  tab: Tab,
  selectedTabId: string,
  onSelectTab: (tabId: string) => void,
}

export const TabsControll: React.FC<Props> = memo(({ tab, selectedTabId, onSelectTab }) => {
  return (
    <button
      type="button"
      className={`tabs__button ${
        selectedTabId === tab.id
          ? 'tabs__button--active'
          : ''
      }`}
      onClick={() => {
        onSelectTab(tab.id);
      }}
    >
      {tab.title}
    </button>
  );
});
