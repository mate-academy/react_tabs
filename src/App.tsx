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
  const curentTabs = tabs;
  const [selectedTab, setSelectedTabs] = useState(1);

  const setTab = (tabId: string) => {
    const id = tabId.slice(tabId.length - 1);

    setSelectedTabs(+id);
  };

  return (
    <>
      <div className="section">
        <h1 className="title">
          {`Selected tab is Tab ${selectedTab}`}
        </h1>
      </div>
      <Tabs tabs={curentTabs} handler={setTab} selectTab={selectedTab} />
    </>
  );
};
