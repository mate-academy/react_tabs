import React, { useState } from 'react';

import { Tabs } from './Tabs';
import './App.scss';
import 'bulma';

export const tabs: Tabs[] = [
  { id: 'tab-1', title: 'Tab #1', content: 'text 1' },
  { id: 'tab-2', title: 'Tab #2', content: 'text 2' },
  { id: 'tab-3', title: 'Tab #3', content: 'text 3' },
];

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const onTabSelected = (tab: Tabs) => {
    if (tab.id !== selectedTab.id) {
      setSelectedTab(tab);
    }
  };

  return (
    <div className="App">
      <div className="App__container">
        <h1 className="App__title">{`Selected tab is ${selectedTab.title}`}</h1>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTab.id}
          onTabSelected={onTabSelected}
        />
        <p
          data-cy="tab-content"
          className="App__content"
        >
          {selectedTab.content}
        </p>
      </div>
    </div>
  );
};

export default App;
