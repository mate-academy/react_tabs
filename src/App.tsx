import React, { useState } from 'react';
import { Tab } from './components/Tabs';

import './App.scss';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0] || null);

  return (
    <div className="app">
      <div className="app__block">
        <h1 className="app_title">{`Selected tab is: ${selectedTab.title}`}</h1>
        <Tab
          tabs={tabs}
          selectedTab={selectedTab.id}
          setTabSelected={setSelectedTab}
        />
      </div>
    </div>
  );
};

export default App;
