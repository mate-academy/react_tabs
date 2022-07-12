import React, { useState } from 'react';
import { Tabs } from './Tabs';
import { Tab } from './react-app-env';

import './App.scss';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = React.memo(() => {
  const [selectedTab, setSelectedTabs] = useState(tabs[0]);

  const onTabSelected = (tab: Tab) => {
    if (selectedTab.id !== tab.id) {
      setSelectedTabs(tab);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1>{`Selected tab is: ${selectedTab.title}`}</h1>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTab.id}
          onTabSelected={onTabSelected}
        >
          <h3>{selectedTab.content}</h3>
        </Tabs>
      </div>
    </div>
  );
});
