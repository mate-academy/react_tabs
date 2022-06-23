import React, { useState } from 'react';

import './App.scss';
import { Tabs } from './Tabs';
import { tabs } from './Content';

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('tab-1');

  const onTabSelected: OnTabSelected = (tabId) => {
    setSelectedTab(tabId);
  };

  return (
    <div className="App">
      <h1 className="title is-2">
        Selected tab:
        {' '}
        {selectedTab}
      </h1>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTab}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};

export default App;
