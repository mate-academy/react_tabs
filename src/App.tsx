import React, { useState } from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(
    {id: '', title: '', content: ''}
  );

  const onTabSelected = (tab: Tab) => {
    setSelectedTab(tab);
  };
 
  return (
      <div className="App">
        <h1>
          Selected tab is:
          { selectedTab.title }
        </h1>
        {tabs.length > 0 && (
          <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          onTabSelected={onTabSelected}
        />
        )}
      </div>
  );
};

export default App;
