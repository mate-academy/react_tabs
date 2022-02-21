import React, { useState } from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState('tab-1');
  const selectedTab = tabs.find((tab: Tab) => tab.id === selectedTabId);

  return (
    <div className="App">
      <h1>
        {selectedTab
          ? `Selected tab is ${selectedTab.title}`
          : 'There no tabs selected curently'}
      </h1>
      <Tabs
        tabs={tabs}
        setSelectedTabId={setSelectedTabId}
      />
      <div>
        {selectedTab?.content}
      </div>
    </div>
  );
};

export default App;
