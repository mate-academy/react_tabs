import React, { useState } from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1 lorem' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const onTabSelected = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const newTab = tabs.find(tab => (
      tab.id === event.currentTarget.value
    ));

    if (newTab) {
      setSelectedTab(newTab);
    }
  };

  return (
    <div className="App">
      <h1>
        Selected tab is
        {selectedTab.title}
      </h1>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTab.id}
        handleTabSelection={onTabSelected}
      />
    </div>
  );
};

export default App;
