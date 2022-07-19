import React, { useState } from 'react';

import './App.scss';
import { Tab } from './Tab';
import { Tabs } from './Tabs';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>(tabs[0]);

  return (
    <div className="App">
      <h1 className="title">{`Selected tab is ${selectedTab.title}`}</h1>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTab.id}
        onTabSelected={(tab: Tab) => {
          return tab ? setSelectedTab(tab) : setSelectedTab(tabs[0]);
        }}
      />
      <p data-cy="tab-content">
        {selectedTab.content}
      </p>
    </div>
  );
};

export default App;
