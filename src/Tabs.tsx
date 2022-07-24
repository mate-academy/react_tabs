import React from 'react';
import classNames from 'classnames';

type Props = {
  tabs: Tab[]
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void

};

export const Tabs: React.FC<Props> = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  return (
    <>
      <ul className="nav nav-tabs">
        {tabs.map(tab => (
          <li
            key={tab.id}
            className="nav-item"
          >
            <button
              className={classNames('nav-link is-secondary', {
                'show active is-active': tab.id === selectedTabId,
              })}
              type="button"
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
