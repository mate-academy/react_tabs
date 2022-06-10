import React, { useState } from 'react';
import { Tab } from './react-app-env';
import { Tabs } from './Tabs';
import './App.scss';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState('tab-1');
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const idSelect = (tab: Tab): void => {
    setSelectedTabId(tab.id);
  };

  const findTabById = (id: string): void => {
    const currentTab = tabs.find(tab => tab.id === id) || tabs[0];

    setSelectedTab(currentTab);
  };

  return (
    <div className="App">
      <h1>{`Selected tab is ${selectedTab.title}`}</h1>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        selectedTab={selectedTab}
        onTabSelected={idSelect}
        findTabById={findTabById}
      />
    </div>
  );
};

export default App;
