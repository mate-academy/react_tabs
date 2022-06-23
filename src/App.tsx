import React, { useState } from 'react';

import './App.scss';
import { Tabs } from './commponents/tabs';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tab | null>(tabs[0]);

  const onTabSelected = (id: string) => {
    const serchedTab: Tab | null = tabs.find(tab => (tab.id === id)) || null;

    setSelectedTab(serchedTab);
  };

  return (
    <div className="App">
      <h1>{`Selected tab is ${selectedTab?.title}`}</h1>

      <Tabs
        tabs={tabs}
        onTabSelected={onTabSelected}
        selectedTab={selectedTab}
      />
    </div>
  );
};

export default App;
