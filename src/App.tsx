import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tab, Tabs } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState('tab-1');
  const isSelectedTab = tabs.find((tab) => selectedTabId === tab.id)
    || tabs[0];

  const tabSelectHandler = (tab: Tab) => {
    setSelectedTabId(tab.id);
  };

  return (
    <div className="section">
      <h1 className="title">
        {isSelectedTab && (
          `Selected tab is ${isSelectedTab.title}`
        )}
      </h1>
      <div data-cy="TabsComponent">
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTabId}
          onTabSelected={tabSelectHandler}
        />
      </div>
    </div>
  );
};
