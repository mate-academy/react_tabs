import React from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <nav className="nav">
      {tabs.map(tab => (
        <button
          className="nav__button"
          type="button"
          key={tab.id}
          onClick={() => onTabSelected(tab)}
        >
          {tab.title}
        </button>
      ))}
      <div className="nav__content">
        {selectedTab?.content}
      </div>
    </nav>
  );
};
