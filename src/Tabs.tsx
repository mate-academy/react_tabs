import React from 'react';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: Callback,
}

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  const insertContent = () => (
    tabs.find(tab => tab.id === selectedTabId)?.content
  );

  return (
    <div className="App__wrapper">
      <ul className="App__list">
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              type="button"
              onClick={tab.id !== selectedTabId
                ? () => onTabSelected(tab.id)
                : () => {}}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <p>{insertContent()}</p>
    </div>
  );
};
