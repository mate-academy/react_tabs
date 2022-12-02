import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';
import { Tabls } from './types/Tabls';

export const tabs: Tabls[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const changeTab = (tabUnderClick: number) => {
    setSelectedTab(tabUnderClick);
  };

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is Tab
        {' '}
        {selectedTab}
      </h1>

      {Tabs && (
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          onChangeTab={changeTab}
        />
      )}
    </div>
  );
};
