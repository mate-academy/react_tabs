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
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);
  let selecetedContent = tabs[0].content;

  tabs.map((tab) => {
    if (tab.id === selectedTabId) {
      selecetedContent = tab.content;
    }

    return 0;
  });

  const handleSelectedTab = (tabId: string) => {
    setSelectedTabId(tabId);
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTabId}`}
      </h1>

      <Tabs
        selectedTabId={selectedTabId}
        tabsArr={tabs}
        onTabSelected={handleSelectedTab}
        selecetedContent={selecetedContent}
      />
    </div>
  );
};
