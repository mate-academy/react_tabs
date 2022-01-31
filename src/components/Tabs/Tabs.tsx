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
}) => {
  return (
    <div className="tabs">
      <ul className="tabs-list">
        {tabs.map(tab => (
          <li
            className="tabs-list__item"
            key={tab.id}
          >
            <button
              value={tab.id}
              type="button"
              className="tabs-list__button"
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="tabs-content">
        {selectedTab.content}
      </div>
    </div>
  );
};
