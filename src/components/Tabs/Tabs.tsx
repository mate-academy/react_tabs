import React from 'react';
import './Tabs.scss';

import cn from 'classnames';

type Props = {
  tabs: Tab[],
  selectedTab: Tab,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTab, onTabSelected }) => (
  <div>
    <div className="container">
      <div className="buttons">
        {tabs.map(tab => (
          <button
            type="button"
            key={tab.id}
            value={tab.id}
            onClick={() => onTabSelected(tab)}
            className={cn('tab', { tab__active: tab.id === selectedTab.id })}
          >
            {tab.title}
            {tab.id !== selectedTab.id && (
              <>
                <div className="left">{}</div>
                <div className="right">{}</div>
              </>
            )}
          </button>
        ))}
      </div>
      <div className="right__side">{}</div>
    </div>
    <div className="tabs__bottom">{}</div>
    <p className="text">
      {selectedTab.content}
    </p>
  </div>
);
