import React, { useState } from 'react';

import './App.scss';
import { Tabs } from './Tabs';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Home', content: '#' },
  { id: 'tab-2', title: 'Profile', content: 'LinkeDin' },
  { id: 'tab-3', title: 'Contact', content: '123-453-7543' },
];

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const handleSelectedClick = (tab: Tab) => {
    if (tab.id !== selectedTab.id) {
      setSelectedTab(tab);
    }
  };

  return (
    <div className="App">
      <h1
        className="App__title"
      >
        {`Selected tab is ${selectedTab.title};`}
      </h1>
      <Tabs
        selectedTab={selectedTab}
        tabs={tabs}
        handleSelectedClick={handleSelectedClick}
      />
    </div>
  );
};

export default App;
