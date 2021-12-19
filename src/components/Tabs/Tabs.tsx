import React from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: Tab,
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  return (
    <>
      <div className="Tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`Tabs__tab ${tab.id === selectedTabId.id && 'Tabs__tab--selected'}`}
            type="button"
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </button>
        ))}
      </div>
    </>
  );
};
