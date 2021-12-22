import React from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => (
  <div className="tab">
    <div className="tab__buttons">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className="tab__button"
          type="button"
          disabled={selectedTabId === tab.id}
          onClick={() => {
            onTabSelected(tab);
          }}
        >
          {tab.title}
        </button>
      ))}
    </div>
  </div>
);

export default Tabs;
