import React from 'react';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: Callback,
}

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  return (
    <div className="App__wrapper">
      <ul className="App__list">
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              type="button"
              onClick={() => onTabSelected(tab.id)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <p>{tabs.find(tab => tab.id === selectedTabId)?.content}</p>
    </div>
  );
};
