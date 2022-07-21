import React, { useState } from 'react';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';
import { Tab } from './types/Tab';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const selectNewTab = (tab: Tab) => {
    if (tab.id !== selectedTab.id) {
      setSelectedTab(tab);
    }
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is
          ${selectedTab.title}`}
      </h1>
      <Tabs
        tabs={tabs}
        selectedTab={selectedTab}
        onTabSelected={selectNewTab}
      />
    </div>
  );
};

export default App;
