import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';
import { Tab } from './type/Tab';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState<string>(tabs[0].id);
  const handleTabSelected = (tab: Tab) => {
    setSelectedTabId(tab.id);
  };

  return (
    <Tabs
      tabs={tabs}
      selectedTabId={selectedTabId}
      onTabSelected={handleTabSelected}
    />
  );
};
