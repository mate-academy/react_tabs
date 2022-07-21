import React, { useState } from 'react';
import './App.scss';
import { Tabs } from './Tabs';
import { Tab } from './types/Tab';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const selectedTab = tabs.find(tab => tab.id === 'tab-1');
  const [activeTab, setActiveTab] = useState(selectedTab);

  if (!activeTab) {
    return null;
  }

  const selectTab = (newTab: Tab) => {
    const filter = tabs.find(tab => tab.id === newTab.id);

    setActiveTab(filter);
  };

  return (
    <div className="App">
      <h1>{`Selected tab is ${activeTab.title}`}</h1>
      <Tabs
        tabs={tabs}
        selectedTabId={activeTab}
        onTabSelected={selectTab}
      />
    </div>
  );
};

export default App;
