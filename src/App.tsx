/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTabsId, setSelectedTabsId] = useState('tab-1');
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const targetTab = event.currentTarget as HTMLAnchorElement;

    setSelectedTabsId(targetTab.hash.slice(1));
  };

  const selectedTab = tabs.find(tab => tab.id === selectedTabsId);

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is {selectedTab?.title}
      </h1>

      <div data-cy="TabsComponent">
        <Tabs
          tabs={tabs}
          selectedTabsId={selectedTabsId}
          onTabSelected={handleClick}
        />
      </div>
    </div>
  );
};
