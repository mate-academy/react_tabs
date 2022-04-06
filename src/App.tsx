import React, { useCallback, useState } from 'react';

import './App.scss';
import { Tabs } from './Tabs/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const selectTab = useCallback((newTabId: string) => (
    setSelectedTabId(newTabId)
  ), []);

  return (
    <div className="App">
      <h1>
        Selected tab is&nbsp;
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </h1>
      <Tabs
        tabs={tabs}
        selectedId={selectedTabId}
        selectTab={selectTab}
      />
    </div>
  );
};
