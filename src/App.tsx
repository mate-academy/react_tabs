import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Tabs } from './components/Tabs';

interface Tab {
  id: string;
  title: string;
  content: string;
}

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('tab-1');

  const handleTabSelected = (tabId: string) => {
    if (tabId !== selectedTab) {
      setSelectedTab(tabId);
    }
  };

  const selectedTabData = tabs.find((t) => t.id === selectedTab);

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is
        {' '}
        {selectedTabData?.title}
      </h1>

      <Tabs
        tabs={tabs}
        tab={selectedTab}
        onTabSelected={handleTabSelected}
      />
    </div>
  );
};
