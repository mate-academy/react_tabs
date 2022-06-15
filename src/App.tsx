import React, { useState } from 'react';

import './App.scss';
import { Tabs } from './Tabs';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const onTabSelected = (id: string): void => {
    setSelectedTabId(id);
  };

  const selectedTab = tabs.find(tab => tab.id === selectedTabId)
    || tabs[0];

  return (
    <div className="App">
      <h1>
        {`Selected tab is ${selectedTab.title}`}
      </h1>
      <Tabs
        selectedTabId={selectedTabId}
        onTabSelected={onTabSelected}
        tabs={tabs}
        selectedTab={selectedTab}
      />
    </div>
  );
};

export default App;
