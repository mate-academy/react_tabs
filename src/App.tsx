import React, { useState } from 'react';
import Tabs from './Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTabId, setTabId] = useState('tab-1');

  const onTabSelected = (id: string) => {
    setTabId(id);
  };

  return (
    <div className="App">
      <h1>
        Selected tab is&nbsp;
        {selectedTabId}
      </h1>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};

export default App;
