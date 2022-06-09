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
  const [selectedTitle, setSelectedTitle] = useState(tabs[0].title);

  return (
    <div className="App">
      <div className="container">
        <h1 className="title is-3">
          Selected tab is&nbsp;
          {selectedTitle}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTabId}
          onTabSelected={setSelectedTabId}
          onTitleSelected={setSelectedTitle}
        />
      </div>
    </div>
  );
};

export default App;
