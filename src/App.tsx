import React, { useState } from 'react';
import Tabs from './Tabs';

import './App.scss';

type Tab = {
  id: string;
  title: string;
  content: string;
};

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC<Tab[]> = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].content);
  const [title, setTitle] = useState('Tab 1');

  const onTabSelected = (tab:Tab) => {
    setSelectedTabId(tab.content);
    setTitle(tab.title);
  };

  return (
    <div className="App">
      <h1>
        Selected tab is&nbsp;
        {title}
      </h1>
      <Tabs
        tabs={tabs}
        onTabSelected={onTabSelected}
        selectedTabId={selectedTabId}
      />
    </div>
  );
};

export default App;
