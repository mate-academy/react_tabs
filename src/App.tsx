import React, { useState } from 'react';
import Tabs from './components/Tabs';
import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('Tab 1');
  const [selectedTabId, setSelectedTabId] = useState('tab-1');

  const onTabSelected = (tab: Tab) => {
    setSelectedTab(tab.title);
    setSelectedTabId(tab.id);
  };

  return (
    <div className="App">
      <h1>
        Selected tab is&nbsp;
        {selectedTab}
      </h1>
      <div>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTabId}
          onTabSelected={onTabSelected}
        />
      </div>
    </div>
  );
};

export default App;
