import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface Tab {
  id: string;
  title: string;
  content: string;
}

export const App: React.FC = () => {
  const [newTab, setNewTab] = useState(tabs[0]);

  const changeTab = (tab: Tab) => {
    setNewTab(tab);
  };

  const selectedTab = tabs.find(tab => tab.id === newTab.id) || tabs[0];

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${newTab.title}`}
      </h1>
      <Tabs
        tabs={tabs}
        onTabSelected={changeTab}
        selectedTabId={newTab.id}
        selectedTab={selectedTab}
      />
    </div>
  );
};
