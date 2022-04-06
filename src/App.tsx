import React, { useState } from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface Tab {
  id: string;
  title: string;
  content: string;
}

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>(tabs[0]);
  const selectTab = (tab: Tab) => setSelectedTab(tab);

  return (
    <>
      {`Selected tab is ${selectedTab.title}`}
      <Tabs
        tabs={tabs}
        onSelect={selectTab}
      />
      <p>
        {selectedTab.content}
      </p>
    </>
  );
};

export default App;
