import React, { useState } from 'react';

import './App.scss';
import { Tabs } from './Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const incomeTabs = [...tabs];
  const [selectedTab, setSelectedTab] = useState(incomeTabs[0]);

  return (
    <div className="App">
      <h1>
        Selected tab is&nbsp;
        {selectedTab.title}
      </h1>
      <div className="App__text">
        There are&nbsp;
        {incomeTabs.length}
        &nbsp;at all
      </div>
      <Tabs
        allTabs={incomeTabs}
        selectedTabId={selectedTab.id}
        onTabSelected={setSelectedTab}
      />
    </div>
  );
};

export default App;
