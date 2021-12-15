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
          <a
            className={classNames('Tab__link',
              { 'Tab__link--selected': selectedTab.id === tab.id })}
            href="/"
            onClick={(event) => {
              event.preventDefault();

              onTabSelected(tab);
            }}
          >
            {tab.title}
          </a>
        </div>
      ))}
    </nav>
  </div>
);
