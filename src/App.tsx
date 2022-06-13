import React, { useState } from 'react';

import './App.scss';

import { Tabs } from './components/Tabs/Tabs';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [selectedTabId, setSelectedTabId] = useState(selectedTab.id);

  const selectTab = (tab: Tab) => {
    setSelectedTab(tab);
    setSelectedTabId(tab.id);
  };

  return (
    <div className="App">
      <h1>{`Selected tab is ${selectedTab.title}`}</h1>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        setSelectedTabId={selectTab}
      />
    </div>
  );
};

export default App;
