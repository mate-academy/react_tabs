import React from 'react';
import classNames from 'classnames';

import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTabId: string,
  onTabSelected: (tab: Tab) => void;
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTabId, onTabSelected }) => (
  <div className="tabs">
    <div className="tabs-btn">
      {tabs.map(tab => (
        <button
          key={tab.id}
          type="button"
          className={classNames('tab-btn', { 'tab-btn--selected': tab.id === selectedTabId })}
          onClick={() => onTabSelected(tab)}
          disabled={tab.id === selectedTabId}
        >
          {tab.title}
        </button>
      ))}
    </div>
    <div className="tabs-content">
      {tabs.filter(tab => tab.id === selectedTabId)[0].content}
    </div>
  </div>
);
