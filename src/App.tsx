import React, { useState } from 'react';
import './App.scss';
import { Tabs } from './Tabs';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const onTabSelect = (tabId: string) => {
    const currentSelectedTab = tabs.find(tab => tab.id === tabId);

    setSelectedTabId(tabId);
    setSelectedTab(currentSelectedTab || tabs[0]);
  };

  return (
    <div data-cy="tab-content">
      <h1>
        Selected tab:
        {selectedTabId}
      </h1>
      <Tabs
        tabs={tabs}
        onTabSelect={onTabSelect}
      />
      <div>
        {selectedTab.content}
      </div>
    </div>
  );
};

export default App;
