import React, { useState } from 'react';
import './reset.scss';
import './App.scss';
import { Tabs } from './components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTab, changeSelectedTab] = useState(tabs[0] || null);

  return (
    <div className="App">
      <h1>
        {`Selected tab is ${selectedTab.title}`}
      </h1>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTab.id}
        onTabSelected={changeSelectedTab}
      />
    </div>
  );
};
