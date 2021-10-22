import React from 'react';

import './Tabs.scss';

interface Tab {
  id: string,
  title: string,
  content: string,
}

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onSelect: (tab: Tab) => void,
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onSelect,
}) => {
  const SelectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <>
      <ul className="tabs__list">
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              type="button"
              className="tabs__button"
              onClick={() => onSelect(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <p className="tabs__content">
        {SelectedTab.content}
      </p>
    </>
  );
};
