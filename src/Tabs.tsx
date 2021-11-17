import React from 'react';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  onTabSelected: (tab: Tab) => void;
  selectedTabId: string;
};

export const Tabs: React.FC<Props> = ({ tabs, onTabSelected, selectedTabId }) => {
  return (
    <div className="tabs__list">
      {tabs.map(tab => (
        <div
          key={tab.id}
          className="tabs__item"
        >
          <button
            type="button"
            onClick={() => onTabSelected(tab)}
            className={classNames('tabs__button', {
              'tabs__button--active': selectedTabId === tab.id,
            })}
          >
            {tab.title}
          </button>
        </div>
      ))}
    </div>
  );
};
