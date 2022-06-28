import React, { useState } from 'react';
import { Tab } from './react-app-env';
import { Tabs } from './Tabs';
import './App.scss';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [currentTabs] = useState(tabs);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const onTabSelect = (tab: Tab) => {
    setSelectedTab(tab);
  };

  return (

    <div>
      <h1>
        Selected tab is:
        {selectedTab.title}
      </h1>

      <Tabs
        tabs={currentTabs}
        onTabSelect={onTabSelect}
        selectedTabId={selectedTab.id}
      />
    </div>

  );
};

export default App;
