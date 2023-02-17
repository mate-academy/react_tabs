import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tab } from './types/Tab';
import { Tabs } from './components/Tabs';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [tabId, setTabId] = useState(tabs[0].id);

  const onTabSelected = (tab: Tab) => {
    setTabId(tab.id);
  };

  const selectedTab = tabs.find(({ id }) => id === tabId) || tabs[0];

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTab.id}`}
      </h1>

      <Tabs
        onTabSelected={onTabSelected}
        selectedTabId={tabId}
        tabs={tabs}
      />
    </div>
  );
};
