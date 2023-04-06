import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';
import { Tab } from './types/Tab';
import { findTabById } from './helper/findTabById';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const handleSelectTabId = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      setSelectedTabId(tab.id);
    }
  };

  const getSelectedTabTitle = () => {
    const selectedTab = findTabById(tabs, selectedTabId);

    return (
      selectedTab ? selectedTab.title : tabs[0].title
    );
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${getSelectedTabTitle()}`}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={handleSelectTabId}
      />
    </div>
  );
};
