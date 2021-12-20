import React from 'react';
import classNames from 'classnames';

import './Tabs.scss';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  return (
    <nav className="Tabs__nav">
      {tabs.map(tab => (
        <button
          className={classNames('Tab', { 'Tab--selected': tab.id === selectedTabId })}
          key={tab.id}
          type="button"
          onClick={() => tab.id !== selectedTabId && onTabSelected(tab)}
        >
          {tab.title}
        </button>
      ))}
    </nav>
  );
};
