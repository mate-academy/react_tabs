import React, { useState } from 'react';
import { Tabs, Tab } from './components/Tabs';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTab, setSelected] = useState(tabs[0].title);
  const [selectedTabId, setSelectedId] = useState(tabs[0].id);

  const handleClick = (value: Tab) => {
    setSelected(value.title);

    setSelectedId(value.id);
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTab}`}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={handleClick}
      />
    </div>
  );
};
