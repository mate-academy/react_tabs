import React from 'react';
import './Tabs.scss';

import cn from 'classnames';

type Props = {
  tabs: Tab[],
  selectedTab: Tab,
  onTabSelected: (tab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTab, onTabSelected }) => (
  <div className="tabs">
    <div className="tabs__container">
      <div className="tabs__buttons">
        {tabs.map(tab => (
          <button
            type="button"
            key={tab.id}
            value={tab.id}
            onClick={() => onTabSelected(tab)}
            className={cn('tabs__tab', { tabs__active: tab.id === selectedTab.id })}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tabs__line">{}</div>
    </div>
    <p className="tabs__text">
      {selectedTab.content}
    </p>
  </div>
);
