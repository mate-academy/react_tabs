import React, { memo, useState } from 'react';

import './App.scss';

import { Tabs } from './components/Tabs';
import { tabs } from './api/tabs';

const App: React.FC = memo(() => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const selectTab = (tabId: string) => {
    setSelectedTab(tabs.find(tab => tab.id === tabId) || tabs[0]);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="App__title">
          {`Selected tab is: ${selectedTab.title}`}
        </h1>

        <Tabs
          tabs={tabs}
          selectedTabId={selectedTab.id}
          onSelectTab={selectTab}
        />
      </div>
    </div>
  );
});

export default App;
