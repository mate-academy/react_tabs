import React from 'react';
import classNames from 'classnames';

type Props = {
  tabs: Tab[],
  onTabSelected: (tab: Tab) => void,
  selectedTabId: string,
};

export const Tabs: React.FC<Props> = ({ selectedTabId, tabs, onTabSelected }) => {
  return (
    <div className="tabs">
      <ul className="tabs__list">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="tabs__item"
          >
            <button
              type="button"
              onClick={() => onTabSelected(tab)}
              className={classNames('tabs__button', { 'tabs__button--active': selectedTabId === tab.id })}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
