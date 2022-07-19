import React, { useState } from 'react';
import './App.scss';
import { Tabs } from './Tabs';
import { Tab } from './Tab';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const tabChanger = (tab: Tab) => {
    if (tab.id === selectedTab.id) {
      return;
    }

    const newTab = tabs.find(element => element.id === tab.id) || tabs[0];

    setSelectedTab(newTab);
  };

  return (
    <div className="App">
      <h1 className="App__title">
        {`Selected tab is ${selectedTab.title}`}
      </h1>

      <Tabs
        tabs={tabs}
        tabChanger={tabChanger}
        currentTab={selectedTab}
      />
    </div>
  );
};

export default App;
