import React from 'react';
import './Tabs.scss';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void
}

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div>
      <ul className="tabs-list">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="tabs-list__item"
          >
            <button
              className={selectedTabId === tab.id
                ? 'button tabs-list__item-button-active'
                : 'button tabs-list__item-button'}
              type="button"
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="content">
        {selectedTab ? selectedTab.content : null}
      </div>
    </div>
  );
};

//  Line 17:11:  Non-interactive elements should not be assigned mouse or keyboard event listeners
