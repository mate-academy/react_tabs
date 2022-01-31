import React from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[]
  selectedTab: Tab,
  onTabSelected : (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTab, onTabSelected }) => (
  <div className="container">
    <ul className="tabs">
      {tabs.map(tab => (
        <li key={tab.id} className="tabs__item">
          <button
            type="button"
            onClick={() => {
              if (tab.id !== selectedTab.id) {
                onTabSelected(tab);
              }
            }}
            className="tabs__button"
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
    <p>{selectedTab.content}</p>
  </div>
);
