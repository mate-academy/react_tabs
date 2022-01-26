import React from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[];
  selectedTab: Tab;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTab, onTabSelected }) => {
  return (
    <div className="Tabs">
      <div className="buttons">
        {tabs.map(tab => (
          <button
            value={tab.id}
            type="button"
            className="buttons__button"
            onClick={() => onTabSelected(tab)}
            key={tab.id}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <p className="content">{selectedTab.content}</p>
    </div>
  );
};
