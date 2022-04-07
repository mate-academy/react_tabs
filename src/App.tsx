import React, { memo, useMemo, useState } from 'react';
import { Tabs } from './components/Tabs/Tabs';
import { Content } from './components/Content/Content';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Additional text for the 1st Tab' },
  { id: 'tab-2', title: 'Tab 2', content: 'Additional text for the 2st Tab' },
  { id: 'tab-3', title: 'Tab 3', content: 'Additional text for the 3st Tab' },
];

const App: React.FC = memo(() => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);
  const selectTab = (tabId: string) => setSelectedTabId(tabId);
  const selectedTab = useMemo(() => tabs.find(tab => tab.id === selectedTabId) || tabs[0],
    [selectedTabId]);

  return (
    <div className="App">
      <h1>{`Selected tab is ${selectedTab.title}`}</h1>
      <Tabs
        tabs={tabs}
        onSelect={selectTab}
        selected={selectedTab}
      />

      <Content content={selectedTab.content} />
    </div>
  );
});

export default App;
