import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';

type Tab = {
  id: string,
  title: string,
  content: string,
};

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const onTabSelected = (tab: Tab = tabs[0]) => {
    setSelectedTabId(tab.id);
  };

  const findTitle = () => (
    tabs.find(tab => tab.id === selectedTabId)?.title
  );

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${findTitle()}`}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};
