import React, { useState } from 'react';
import './App.scss';
import { Tab, Tabs } from './components/Tabs/Tabs';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState('tab-1');

  const currentTab = tabs.find(tab => selectedTabId === tab.id);

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is&nbsp;
        {currentTab?.title}
      </h1>

      <div>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTabId}
          onTabSelected={setSelectedTabId}
        />
      </div>
    </div>
  );
};

export default App;
