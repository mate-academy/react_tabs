import React, { useState } from 'react';
import Tabs from './Tabs';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const onTabSelected = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const currentTabId = event.currentTarget.hash.slice(1);
    const [currentTab] = tabs.filter(tab => tab.id === currentTabId);

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
