import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
// eslint-disable-next-line import/no-cycle
import { Tabs } from './components/Tabs/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export type Tab = {
  id: string,
  title: string,
  content: string,
};

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState('tab-1');
  const isActive = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const selectTab = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      setSelectedTabId(tab.id);
    }
  };

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is
        {' '}
        {isActive.title}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={selectTab}
      />

    </div>
  );
};
