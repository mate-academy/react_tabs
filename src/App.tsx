import React, { useState } from 'react';

import './App.scss';
import { Tabs } from './components/Tabs/Tabs';
import { Tab } from './types';

const tabsFromServer: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabsFromServer[0].id);

  const onSelectTab = (id: string) => {
    setSelectedTabId(id);
  };

  const selectedTab = (id: string) => (
    tabsFromServer.find(tab => tab.id === id)
  );

  return (
    <div className="App">
      <h1>{`Selected tab is ${selectedTab(selectedTabId)?.title || ''}`}</h1>
      <Tabs
        tabs={tabsFromServer}
        selectTab={onSelectTab}
      />
      <p>
        {selectedTab(selectedTabId)?.content}
      </p>
    </div>
  );
};

export default App;
