import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { Tabs } from './components/Tabs';
import { Tab } from './types/tab';

export const tabsFromServer = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabsFromServer[0]);

  const selectNewTab = (tab: Tab): void => {
    setSelectedTab(tab);
  };

  return (
    <div className="section">
      <h1 className="title">
        {`${selectedTab.title} is selected...`}
      </h1>

      <Tabs
        tabs={tabsFromServer}
        selectedTabId={selectedTab.id}
        onTabSelected={selectNewTab}
      />
    </div>
  );
};
