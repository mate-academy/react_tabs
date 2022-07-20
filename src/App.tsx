import React, { useState } from 'react';

import './App.scss';
import { Tabs } from './Tabs';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const innerTabs = [...tabs];
  const [selectedTab, setSelectedTab] = useState('tab-1');

  const changeId = (tabId: string) => {
    if (tabId !== selectedTab) {
      setSelectedTab(tabId);
    }
  };

  return (
    <div className="App">
      <h1>
        Selected tab is&nbsp;
        {innerTabs.find(tab => tab.id === selectedTab)?.title}
      </h1>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTab}
        changeId={changeId}
      />
    </div>
  );
};

export default App;
