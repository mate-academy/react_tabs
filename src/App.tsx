import React, { useCallback, useMemo, useState } from 'react';
import { Tabs } from './components/Tab';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Home', content: 'Some text 1' },
  { id: 'tab-2', title: 'Profile', content: 'Some text 2' },
  { id: 'tab-3', title: 'Contact', content: 'Some text 3' },
];

const App: React.FC = React.memo(() => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const onTabSelected = useCallback((tabId: string) => {
    setSelectedTabId(tabId);
  }, []);

  const findSelectedTab = useMemo(() => {
    const result = tabs.find(tab => tab.id === selectedTabId);

    if (!result) {
      return tabs[0];
    }

    return result;
  }, [selectedTabId]);

  return (
    <div className="App">
      <h1>
        Selected tab is&nbsp;
        {findSelectedTab.title}
      </h1>
      <Tabs
        tabs={tabs}
        onTabSelected={onTabSelected}
        selectedTabId={selectedTabId}
      />
      <p>
        {findSelectedTab.content}
      </p>
    </div>
  );
});

export default App;
