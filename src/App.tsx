import React, { useState } from 'react';
import './App.scss';
import { Tab } from './react-app-env';
import { Tabs } from './Components/Tabs';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const handleSelect = (id: string): void => {
    setSelectedTabId(id);
  };

  const handleSelectedTab = (id: string): void => {
    const tabItem = tabs.find(tab => tab.id === id) || tabs[0];

    setSelectedTab(tabItem);
  };

  return (
    <div className="App">
      <h1 className="fs-2">
        {`Selected tab is ${selectedTab.title}`}
      </h1>
      <Tabs
        tabs={tabs}
        onClick={handleSelect}
        selectedTabId={selectedTabId}
        onTabSelected={handleSelectedTab}
        selectedTab={selectedTab}
      />
    </div>
  );
};

export default App;
