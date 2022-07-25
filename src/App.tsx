import React, { useState } from 'react';
import { Tabs } from './components/Tabs/Tabs';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState('tab-1');

  const currentTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div className="App">
      <h1 className="App__title">
        {`Selected tab is ${currentTab?.title}`}
      </h1>
      <Tabs
        data-cy="tab-content"
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={setSelectedTabId}
      />
    </div>
  );
};

export default App;
