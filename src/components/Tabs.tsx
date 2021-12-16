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
    <>
      <nav className="nav__tabs">
        {tabs.map(tab => (
          <button
            className={classNames('tab-button', { 'tab-button--active': tab.id === selectedTabId })}
            type="button"
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </button>
        ))}
      </nav>
    </>
  );
};
