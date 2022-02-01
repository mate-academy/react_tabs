import React from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTab: Tab,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTab,
  onTabSelected,
}) => (
  <ul>
    {tabs.map(tab => (
      <li key={tab.id} className="list__item">
        <button
          type="button"
          value={tab.id}
          className="button is-primary is-outlined"
          onClick={() => onTabSelected(tab)}
        >
          {tab.title}
        </button>

      </li>
    ))}

    <p className="content">{selectedTab.content}</p>
  </ul>
);
