import classNames from 'classnames';
import React from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTab: Tab,
  onTabSelected: (tab: Tab) => void,
};

enum ColorTabs {
  '#000',
  '#1b1b1b',
  '#ff9100',
}

export const Tabs: React.FC<Props> = ({ tabs, selectedTab, onTabSelected }) => (
  <div
    style={{ backgroundColor: ColorTabs[0] }}
  >
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
            onClick={() => (selectedTab.id !== tab.id) && onTabSelected(tab)}
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
