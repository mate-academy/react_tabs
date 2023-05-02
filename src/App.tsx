import React, { useState, useMemo } from 'react';
import { Tabs } from './components/Tabs/Tabs';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

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
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const handleSelectedTab = (tab: Tab) => {
    if (selectedTabId !== tab.id) {
      setSelectedTabId(tab.id);
    }
  };

  const [selectedTab] = useMemo(
    () => tabs.filter((tab) => tab.id === selectedTabId), [selectedTabId],
  );

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTab.title}`}
      </h1>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={handleSelectedTab}
        selectedTab={selectedTab}
      />
    </div>
  );
};
