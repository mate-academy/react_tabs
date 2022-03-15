import React, { useState } from 'react';
import { Tabs } from './Tabs';

import './App.scss';
import { Tab } from './react-app-env';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const changer = (target: Tab) => {
    setSelectedTab(target);
  };

  return (
    <div className="App">
      <h1>{`Selected tab is ${selectedTab.title}`}</h1>
      <Tabs
        tabs={tabs}
        selected={selectedTab}
        onChanger={changer}
      />
    </div>
  );
};

export default App;
