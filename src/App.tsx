import React, { useState } from 'react';

import { Tab } from './types/Tab';
import { Tabs } from './components/Tabs';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const selectTab = (tab: Tab) => {
    setSelectedTabId(tab.id);
  };

  const selectedTitle = tabs.find(({ id }) => id === selectedTabId)?.title;

  return (
    <div className="section">
      <h1 className="title">
        {
          selectedTitle
            ? (
              `Selected tab is ${selectedTitle}`
            )
            : (
              'There is no selected tab.'
            )
        }
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={selectTab}
      />
    </div>
  );
};
