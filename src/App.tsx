import React, { useState } from 'react';

import './App.scss';
import { Tabs } from './Tabs';
import { Tab, OnTabSelected } from './react-app-env';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [currentTabs] = useState(tabs);
  const [selectedTab, setSelectedTab] = useState(currentTabs[0]);

  const onTabSelected: OnTabSelected = (tab) => {
    if (selectedTab.id !== tab.id) {
      setSelectedTab(tab);
    }
  };

  return (
    <div className="App">
      <h1 className="title">
        {`Selected tab is ${selectedTab.title}`}
      </h1>

      <Tabs
        tabs={currentTabs}
        selectedTabId={selectedTab.id}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};

export default App;
