import React from 'react';
import classNames from 'classnames';
import './Tabs.scss';

import { Tab } from '../types';

interface Props {
  tabs: Tab[];
  selectedTabId: Tab;
  onTabSelected: (tab: Tab) => void;
}

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <ul className="tabs">
      {tabs.map(tab => (
        <li key={tab.id} className="tabs__item">
          <button
            type="button"
            className={classNames(
              'tabs__btn',
              {
                'tabs__btn--active': tab.id === selectedTabId.id,
              },
            )}
            onClick={() => {
              if (selectedTabId.id !== tab.id) {
                onTabSelected(tab);
              }
            }}
          >
            {tab.id}
          </button>
        </li>
      ))}
    </ul>
  );
};
