import React, { useState } from 'react';
import { Tabs } from './components/Tabs';
import { Tab } from './types';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const tab1 = tabs.find(({ id }) => id === 'tab-1') as Tab;
  const [selectedTab, setSelectedTab] = useState(tab1);

  const {
    id,
    title,
    content,
  } = selectedTab;

  const onTabSelected = (tab: Tab) => {
    if (!tabs.includes(tab)) {
      setSelectedTab(tab1);
      throw new Error(
        'Invalid Tab - Switched to Tab 1',
      );
    }

    setSelectedTab(tab);
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${title}`}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={id}
        onTabSelected={onTabSelected}
        content={content}
      />
    </div>
  );
};
