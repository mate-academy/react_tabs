import React from 'react';
import { Tab } from '../../types';
import './Tabs.scss';

interface Props {
  tabs: Tab[];
  selectTab: (tab: Tab) => void;
}

export const Tabs: React.FC<Props> = ({ tabs, selectTab }) => {
  return (
    <div className="tabs">
      <ul className="tabs__list">
        {tabs.map(tab => (
          <li
            className="tabs__item"
            key={tab.id}
          >
            <button
              type="button"
              className="tabs__button"
              onClick={() => selectTab(tab)}
            >
              <p className="tabs__title">
                {tab.title}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
