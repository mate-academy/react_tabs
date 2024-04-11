import 'bulma/css/bulma.css';
import './App.scss';
import React, { useState } from 'react';
import { Tabs } from './components/Tabs/Tabs';
import { Tab } from './components/Tabs/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [tabId, setTabId] = useState(tabs[0].id);

  const handleTabSelected = (tab: Tab) => {
    setTabId(tab.id);
  };

  const selectedTab = tabs.find(tab => tab.id === tabId) || tabs[0];

  return (
    <div className="section">
      <h1 className="title">Selected tab is {selectedTab.title}</h1>
      <Tabs
        tabs={tabs}
        selectedTabId={tabId}
        onTabSelected={handleTabSelected}
      />
    </div>
  );
};
