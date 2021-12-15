import React from 'react';
import { Tab } from './Tab';

import './Tabs.scss';

type Props = {
  tabs: Tab[],
  onTabSelected: (selectedTab: Tab) => void,
};

export const Tabs: React.FC<Props> = ({ tabs, onTabSelected }) => (
  <div className="Tabs">
    <nav className="Tabs__nav">
      {tabs.map(tab => (
        <div className="Tab" key={tab.id}>
          <Tab
            key={tab.id}
            tab={tab}
            onTabSelected={onTabSelected}
          />
        </div>
      ))}
    </nav>
  </div>
);
