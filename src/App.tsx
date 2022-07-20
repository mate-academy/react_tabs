import React, { useState } from 'react';
import { Tabs } from './components/Tabs/Tabs';
import './App.scss';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTab, selectTabId] = useState(tabs[0]);

  const choosenTab = (tab: Tab) => {
    if (tab.id !== selectedTab.id) {
      selectTabId(tab);
    }
  };

  return (
    <div className="App">
      <h1 className="title notification is-danger">{`Selected tab is ${selectedTab.title}`}</h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTab.id}
        onTabSelected={choosenTab}
      />

      <div className="notification text is-primary">
        {selectedTab.content}
      </div>
    </div>
  );
};
