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
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const selectTab = (newTab: Tab) => {
    setActiveTab(newTab);
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
