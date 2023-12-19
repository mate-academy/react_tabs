import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

type Tab = {
  id: string;
  title: string;
  content: string;
};

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState('tab-1');

  const handleTabSelected = (tab: Tab) => {
    setSelectedTabId(tab.id);
    console.log('Selected tab:', tab);
  };

  const tabs: Tab[] = [
    { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
    { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
    { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
  ];

  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is&nbsp;
        {selectedTab ? selectedTab.title : 'Tab 1'}
      </h1>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        setSelectedTabId={setSelectedTabId}
        onTabSelected={handleTabSelected}
      />
    </div>
  );
};
