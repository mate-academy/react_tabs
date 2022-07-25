import React, { useState } from 'react';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';
import { Tab } from './types/Tab';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
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
        {`Selected tab is ${selectedTab.title}`}
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
