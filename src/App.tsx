import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';
import { Tab } from './tab';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [tabId, setTabId] = useState(tabs[0].id);

  const onTabSelected = (tab: Tab) => {
    if (tabs.includes(tab)) {
      setTabId(tab.id);
    } else {
      setTabId(tabs[0].id);
    }
  };

  const titleTabSelected = tabs.find(tab => tab.id === tabId)?.title;

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${titleTabSelected}`}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={tabId}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};
