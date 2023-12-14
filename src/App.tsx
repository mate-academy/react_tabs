import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Tab = {
  id: string,
  title: string,
  content: string,
};

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState('tab-1');

  const onTabSelected = (tab: Tab) => {
    setSelectedTabId(tab.id);
  };

  const selectedTab = tabs.find(el => el.id === selectedTabId) || tabs[0];

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTab.title}`}
      </h1>
      <Tabs
        tabs={tabs}
        selectedTab={selectedTab}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};
