import React from 'react';
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
      {tabs.map(tab => {
        const { id } = tab;

        return (
          <li key={id} className="tabs__item">
            <button
              type="button"
              className={id === selectedTabId.id
                ? 'tabs__btn tabs__btn--active'
                : 'tabs__btn '}
              onClick={() => {
                if (selectedTabId.id !== id) {
                  onTabSelected(tab);
                }
              }}
            >
              {id}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
