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

  const selectTab = (id: string) => {
    if (id !== selectedTabId) {
      return () => onTabSelected(id);
    }

    return () => {};
  };

  return (
    <div className="App__wrapper">
      <ul className="App__list">
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              type="button"
              onClick={selectTab(tab.id)}
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
