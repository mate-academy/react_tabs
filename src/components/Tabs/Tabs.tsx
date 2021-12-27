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
    <div className='tab__list'>
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={tab.id === selectedTabId ? 'tab__list__tab--selected' : 'tab__list__tab'}
          type="button"
          onClick={() => onTabSelected(tab)}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
};
