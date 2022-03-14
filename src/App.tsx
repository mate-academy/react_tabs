import React, { useEffect, useState } from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  useEffect(() => {
  }, [selectedTab]);

  return (
    <div className="App">
      <h1>
        {selectedTab
          ? `Selected tab is ${selectedTab.title}`
          : 'There no tabs selected curently'}
      </h1>
      <Tabs
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
    </div>
  );
};

export default App;
