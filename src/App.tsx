import React, { useState } from 'react';
// eslint-disable-next-line import/no-cycle
import { Tabs } from './Tabs';

import './App.scss';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const findTabByID = (tabId: string): Tab | null => {
  return tabs.find(tab => tab.id === tabId) || null;
};

const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const onTabSelected = (id: string) => {
    setSelectedTabId(id);
  };

  const selectedTab = findTabByID(selectedTabId) || tabs[0];

  return (
    <main
      className="
       App box
       is-flex
       is-flex-direction-column"
    >
      <h1 className="title is-2">
        {`Selected tab is ${selectedTab.title}`}
      </h1>

      <Tabs
        tabs={tabs}
        selector={onTabSelected}
        selectedTabId={selectedTabId}
      />
    </main>
  );
};

export default App;
