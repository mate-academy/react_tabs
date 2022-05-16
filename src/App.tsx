import React, { useState } from 'react';
import { Tabs } from './components/Tabs/Tabs';

import './App.scss';

const tabsFromServer: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState('tab-1');

  const onTabSelected = (id: string) => {
    setSelectedTabId(id);
  };

  return (
    <div className="App">
      <h1>{`Selected tab is ${selectedTabId}`}</h1>
      <div>{`tabsFromServer.length: ${tabsFromServer.length}`}</div>
      <hr />
      <Tabs
        tabs={tabsFromServer}
        selectedTabId={selectedTabId}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};

export default App;
