import React from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTab: Tab,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTab, onTabSelected }) => (
  <div>
    <ul className="list">
      {tabs.map(tab => (
        <li key={tab.id} className="list__tab">
          <button
            type="button"
            className="button"
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
    <div>
      <p>{selectedTab.content}</p>
    </div>
  </div>
);
