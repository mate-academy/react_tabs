import React from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => (
  <div>
    <ul className="list">
      {tabs.map(tab => (
        <li key={tab.id} className="list__item">
          <button
            type="button"
            className="button is-success"
            onClick={() => {
              if (tab.id !== selectedTabId) {
                onTabSelected(tab);
              }
            }}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
  </div>
);
