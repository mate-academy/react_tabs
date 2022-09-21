import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';

interface Tab {
  id: string,
  title: string,
  content: string,
}

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);
  const selectedTabId = tabs.find(tab => tab.id === selectedTab) || tabs[0];

  const onTabSelected = (tab: Tab) => {
    setSelectedTab(tab.id);
  };

  const handelClick = (tab: Tab) => {
    if (selectedTab !== tab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTabId.title}`}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        handelClick={handelClick}
      />
    </div>
  );
};
