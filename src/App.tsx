import React, { useState } from 'react';
import { Tabs, Tab } from './components/Tabs/Tabs';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState('tab-1');
  const getTabById = tabs.find(tab => tab.id === selectedTabId);
  const handleSelectedTab = (tab: Tab) => setSelectedTabId(tab.id);

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${getTabById?.title}`}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={handleSelectedTab}
      />
    </div>
  );
};
