import React, { useState } from 'react';

import './App.scss';
import { Tabs } from './Tabs';
import { Tab } from './react-app-env';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);
  const currentTab = tabs.find(tab => tab.id === selectedTabId);

  const onTabSelected = (tabId: string) => {
    setSelectedTabId(tabId);
  };

  return (
    <div className="App">
      <h1>{`Selected tab is ${currentTab?.title}`}</h1>
      <Tabs
        allTabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={onTabSelected}
      />
      <div>
        <p
          data-cy="tab-content"
        >
          {currentTab?.content}
        </p>
      </div>
    </div>
  );
};

export default App;
