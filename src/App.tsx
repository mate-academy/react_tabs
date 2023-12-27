import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { TabsType } from './types/TabsType';
import { Tabs } from './components/Tabs/Tabs';

export const tabs: TabsType[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState('tab-1');

  const onTabSelected = (tab: TabsType) => {
    setSelectedTabId(tab.id);
  };

  const title = () => {
    const selectedTab = tabs.find(({ id }) => id === selectedTabId);

    return `Selected tab is ${selectedTab?.title}`;
  };

  return (
    <div className="section">
      <h1 className="title">
        {title()}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};
