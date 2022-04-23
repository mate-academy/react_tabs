import React, { useState } from 'react';
import { Tabs } from './components/Tabs';
import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTab, newTab] = useState(tabs[0]);

  const onTabSelected = (tab:Tab): void => {
    const nextTab = tabs.find((next) => next.id === tab.id);

    if (nextTab && selectedTab !== nextTab) {
      return newTab(nextTab);
    }

    return newTab(selectedTab);
  };

  return (

    <div className="App">
      <h1>
        Selected tab is
        {` ${selectedTab.id}`}
      </h1>
      <div>{tabs.length}</div>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTab.id}
        onSelect={onTabSelected}
      />
    </div>
  );
};

export default App;
