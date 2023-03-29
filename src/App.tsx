import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tab } from './types.ts/Tab';
import { Tabs } from './components/Tabs/Tabs';
import { findTab } from './HelperFunction';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const currentTab = findTab(tabs, selectedTabId);

  const handleClick = (tab: Tab) => {
    setSelectedTabId(tab.id);
  };

  return (
    <div className="section">
      <h1
        data-cy="tab-content"
        className="title"
      >
        {`Selected tab is ${currentTab.title}`}
      </h1>
      <Tabs
        tabs={tabs}
        onTabSelected={handleClick}
        selectedTabId={selectedTabId}
      />
    </div>
  );
};
