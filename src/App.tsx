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
  const [TabId, setTabId] = useState(tabs[0].id);

  const handleTabSelected = (tab: Tab) => {
    setTabId(tab.id);
  };

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is {tabs.find(tab => tab.id === TabId)?.title}
      </h1>
      <Tabs
        tabs={tabs}
        selectedTabId={TabId}
        onTabSelected={handleTabSelected}
      />
    </div>
  );
};
