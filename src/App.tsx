/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';

import './App.scss';
import { Tabs } from './Tabs';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface Tab {
  id: string,
  title: string,
  content: string,
}

const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);
  const onTabSelected = (id: string) => (setSelectedTabId(id));
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div className="App">
      <h1>Selected tab is&nbsp;{selectedTab.title}</h1>
      <div>{tabs.length}</div>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onSelect={onTabSelected}
      />
    </div>
  );
};

export default App;
