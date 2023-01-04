import React, { useState } from 'react';
import Tabs from './Tabs';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tab } from './types/tab';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>(tabs[0]);

  const onTabSelected = (chosenTab: Tab) => {
    const currentTab = tabs.find(tab => tab.id === chosenTab.id) || tabs[0];

    setSelectedTab(currentTab);
  };

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is
        {' '}
        {selectedTab.title}
      </h1>
      <Tabs
        tabs={tabs}
        selectedTab={selectedTab}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};
