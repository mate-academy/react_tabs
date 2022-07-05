import React, { useState } from 'react';

import './App.scss';
import { Tabs } from './components/Tabs';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const displayTitle = (tabId: string) => (
    tabs.find(tab => tab.id === tabId)?.title
  );

  const selectTabId = (tabId: string) => {
    setSelectedTabId(tabId);
  };

  return (
    <div className="App">
      <h1>
        {`Selected tab is ${displayTitle(selectedTabId)}`}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        selectTabId={selectTabId}
      />
    </div>
  );
};

export default App;
