import React from 'react';
import { Tab } from '../../types/types';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
}

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  const findContent = tabs.find(tab => tab.id === selectedTabId)?.content;

  return (
    <div className="tabs">
      <ul className="tabs__list">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={tab.id === selectedTabId
              ? 'tabs__list-item tabs__list-item--active'
              : 'tabs__list-item'}
          >
            <button
              type="button"
              className={tab.id === selectedTabId
                ? 'tabs__list-button tabs__list-button--active'
                : 'tabs__list-button'}
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <p>
        {findContent}
      </p>
    </div>
  );
};
