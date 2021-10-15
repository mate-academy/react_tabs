import React from 'react';
import './List.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tabID: string) => void,
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div>
      <ul className="list">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="list__item"
          >
            <button
              type="button"
              className="tab-button"
              onClick={() => {
                onTabSelected(tab.id);
              }}
              disabled={tab.id === selectedTabId}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <p>
        {selectedTab ? selectedTab.content : ''}
      </p>
    </div>
  );
};
