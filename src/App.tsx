import React, { useState } from 'react';
import { Tabs } from './Components/Tabs/Tabs';

import './App.scss';

interface Tab {
  id: string,
  title: string,
  content: string,
}

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="App">
      <h1>{`Selected tab is ${selectedTab.title}`}</h1>
      <Tabs
        tabs={tabs}
        tabsId={selectedTab.id}
        tabsContent={selectedTab.content}
        onTabSelected={setSelectedTab}
      />
    </div>
  );
};

export default App;
