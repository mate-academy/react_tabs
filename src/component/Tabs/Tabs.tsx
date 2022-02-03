import classNames from 'classnames';
import React from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTab: Tab,
  onTabSelected: (tabId: string) => void,
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTab, onTabSelected }) => (
  <div>
    <ul className="Tab__list">
      {tabs.map(tab => (
        <li
          className="Tabs__item"
          key={tab.id}
        >
          <button
            type="button"
            className={classNames(
              'Tabs__button',
              (selectedTab.id === tab.id) && 'Tabs__button--selected',
            )}
            onClick={() => (selectedTab.id !== tab.id) && onTabSelected(tab.id)}
          >
            <div className="Tabs__title">{tab.title}</div>
          </button>
        </li>
      ))}
    </ul>
    <p className="Tabs__content">
      {selectedTab.content}
    </p>
  </div>
);
