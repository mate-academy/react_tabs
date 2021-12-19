/* eslint-disable jsx-quotes */
import React from 'react';
import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => {
  return (
    <div className='tabs'>
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={tab.id === selectedTabId ? 'tabs__tab--selected' : 'tabs__tab'}
          type="button"
          onClick={() => onTabSelected(tab)}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};
