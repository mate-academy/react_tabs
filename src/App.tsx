import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';
import { getTabById } from './helpers/getTabById';
import { Tab } from './types';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState<string>(tabs[0].id);

  const onTabSelected = (tabData: Tab) => {
    setSelectedTabId(tabData.id);
  };

  if (!getTabById(tabs, selectedTabId)) {
    setSelectedTabId(tabs[0].id);
  }

  const selectedTabTitle = getTabById(tabs, selectedTabId)?.title;

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTabTitle}`}
      </h1>

      <Tabs
        selectedTabId={selectedTabId}
        tabs={tabs}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};
