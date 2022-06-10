import React, { useState } from 'react';
import { Tabs } from './Tabs';

import './App.scss';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const onTabSelected = (id: string): void => {
    setSelectedTabId(id);
  };

  const currentTitle = tabs.find(tab => selectedTabId === tab.id);

  return (
    <div className="App">
      <div className="container">
        <h1 className="title is-3">
          Selected tab is&nbsp;
          {currentTitle?.title}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTabId}
          onTabSelected={onTabSelected}
        />
      </div>
    </div>
  );
};

export default App;
