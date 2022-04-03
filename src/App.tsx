import React, { useState } from 'react';

import './App.scss';
import { Tabs } from './Tabs';

interface Tab {
  id: string,
  title: string,
  content: string
}

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTab, setSelected] = useState(tabs[0]);

  const onTabSelected = (tab: Tab) => {
    setSelected(tab);
  };

  return (
    <div className="App">
      <h1>{`Selected tab is ${selectedTab.title}`}</h1>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTab.id}
        onSelect={onTabSelected}
      />
    </div>
  );
};

export default App;
