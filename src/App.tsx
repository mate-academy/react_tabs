import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState('tab-1');
  const [selectedTab, setSelectedTab] = useState({
    id: 'tab-1', title: 'Tab 1', content: 'Some text 1',
  });

  useEffect(() => {
    setSelectedTabId(selectedTab.id);

    if (tabs.some(tab => tab.id === selectedTabId)) {
      return;
    }

    setSelectedTab({
      id: 'tab-1', title: 'Tab 1', content: 'Some text 1',
    });
  }, [selectedTab]);

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTab.title}`}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={setSelectedTab}
        selectedTab={selectedTab}
      />

    </div>
  );
};
