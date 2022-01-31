import React from 'react';

type Props = {
  tabs: Tab[],
  onTabSelected: (tab: Tab) => void,
  selectedTab: Tab,
};

export const Tabs: React.FC<Props> = ({ tabs, onTabSelected, selectedTab }) => (
  <div className="has-text-centered">
    <ul className="buttons">
      {tabs.map(tab => (
        <li key={tab.id}>
          <button
            type="button"
            className="button is-warning is-light"
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
    <p className="content is-medium">{selectedTab.content}</p>
  </div>
);
