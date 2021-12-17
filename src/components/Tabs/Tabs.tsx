import React from 'react';
import classNames from 'classnames';

import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  return (
    <ul className="tabs-container">
      {tabs.map(tab => (
        <li
          key={tab.id}
          className={classNames(
            'tab-title',
            { 'tab-title--selected': tab.id === selectedTabId },
          )}
        >
          <button
            type="button"
            className="tab-title__button"
            onClick={() => {
              onTabSelected(tab);
            }}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
  );
};
