import React from 'react';
import classNames from 'classnames';

type Props = {
  tabs: Tab[];
  selectedTabId: string;
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  return (
    <>
      <nav className="App__tabs">
        {tabs.map(tab => (
          <button
            className={classNames('Tab', { 'Tab--selected': tab.id === selectedTabId })}
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
