import React, { useState } from 'react';
import { Tab } from './components/types/Tab';
import { Tabs } from './components/Tab/Tabs';

import './App.scss';

const tabsFromServer: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabsFromServer[0]);

  const onTabSelected = (target: Tab) => {
    setSelectedTab(target);
  };

  return (
    <div className="App">
      <h1>{`Selected tab is ${selectedTab.title}`}</h1>
      <Tabs
        tabs={tabsFromServer}
        selectedTab={selectedTab}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};

export default App;
