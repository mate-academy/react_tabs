import React from 'react';
import './Tabs.scss';

interface Props {
  selectedTabId: string,
  tabsAll: Tab[],
  onSelectedTabId: (tab: Tab) => void,
}

export const Tabs: React.FC<Props> = ({ tabsAll, selectedTabId, onSelectedTabId }) => {
  return (
    <div className="tabs app__tabs">
      {tabsAll.map(tab => (
        <button
          type="button"
          className={tab.id === selectedTabId ? 'tabs__tab--active' : 'tabs__tab'}
          key={tab.id}
          onClick={() => {
            if (tab.id !== selectedTabId) {
              onSelectedTabId(tab);
            }
          }}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};
