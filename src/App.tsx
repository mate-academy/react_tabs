import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Tab } from './types/Tab';
import { Tabs } from './components/Tabs';
import { getSelectedTab } from './helpers';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const selectTabId = (newTab: Tab): void => {
    setSelectedTabId(newTab.id);
  };

  const selectedTab = getSelectedTab(tabs, selectedTabId);

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTab?.title}`}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={selectTabId}
      />
    </div>
  );
};
