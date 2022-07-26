import React, { useState } from 'react';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';
import { TabsType } from './Type/TabsType';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(
    tabs.find(tab => tab.id === 'tab-112345'),
  );
  const selectedTabId = selectedTab?.id || 'tab-1';

  const onTabSelected = (tab: TabsType) => {
    setSelectedTab(tab);
  };

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is&nbsp;
        {selectedTab?.title}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};

export default App;
