import React, { useCallback, useState } from 'react';
import './App.scss';
import { Tabs } from './components/Tabs';
import { Tab } from './types';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tabs 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tabs 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tabs 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>(tabs[0]);
  const selectTab = useCallback((tab: Tab) => {
    setSelectedTab(tab || tabs[0]);
  }, []);

  return (
    <div className="App">
      <h1>
        Selected tab is&nbsp;
        <span className="selected-tab">{`${selectedTab.title}`}</span>
      </h1>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTab.id}
        selectTab={selectTab}
      />
      <span>{selectedTab.content}</span>
    </div>
  );
};
