import React, { useState } from 'react';

import './App.scss';
import { Tabs } from './components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const setTab = (tabId: string) => {
    const newSelectedTab = tabs.find(tab => tab.id === tabId) || tabs[0];

    setSelectedTab(newSelectedTab);
  };

  return (
    <div className="app">
      <h1>
        Selected tab is&nbsp;
        {selectedTab.id}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTab.id}
        setSelectedTab={setTab}
      />
    </div>
  );
};

export default App;
