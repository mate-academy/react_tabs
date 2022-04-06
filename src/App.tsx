import React, { memo, useState } from 'react';

import './App.scss';

import { Tabs } from './components/Tabs';
import { tabs } from './api/tabs';

const App: React.FC = memo(() => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const selectTab = (tabId: string) => {
    setSelectedTabId((tabs.find(tab => tab.id === tabId) || tabs[0]).id);
  };

  const getTabTitle = (id: string) => (
    tabs.find(tab => tab.id === id)?.title || ''
  );

  return (
    <div className="App">
      <div className="container">
        <h1 className="App__title">
          {`Selected tab is: ${getTabTitle(selectedTabId)}`}
        </h1>

        <Tabs
          tabs={tabs}
          selectedTabId={selectedTabId}
          onSelectTab={selectTab}
        />
      </div>
    </div>
  );
});

export default App;
