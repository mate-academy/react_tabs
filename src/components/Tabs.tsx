import classNames from 'classnames';
import React from 'react';

import './Tabs.scss';

type Props = {
  tabs: Tab[],
  selectedTab: Tab,
  onTabSelected: (selectedTab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({ tabs, selectedTab, onTabSelected }) => (
  <div className="Tabs">
    <nav className="Tabs__nav">
      {tabs.map(tab => (
        <div className="Tab" key={tab.id}>
          <button
            type="button"
            className={classNames('Tab__button',
              { 'Tab__button--selected': selectedTab.id === tab.id })}
            onClick={() => {
              if (tab.id !== selectedTab.id) {
                onTabSelected(tab);
              }
            }}
          >
            {tab.title}
          </button>
        </div>
      ))}
    </nav>
  </div>
);
