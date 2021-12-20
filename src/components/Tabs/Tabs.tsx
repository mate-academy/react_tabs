import classNames from 'classnames';
import React from 'react';
import { Tab } from '../../types/types';

interface Props {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
}

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  return (
    <div className="tabs">
      <ul className="tabs__list">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={classNames(
              'tabs__list-item',
              { 'tabs__list-item--active': tab.id === selectedTabId },
            )}
          >
            <button
              type="button"
              onClick={() => onTabSelected(tab)}
              className={classNames(
                'tabs__list-button',
                { 'tabs__list-button--active': tab.id === selectedTabId },
              )}
            >
              {tab.title}
            </button>
            {tab.id === selectedTabId && (
              tab.content
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
