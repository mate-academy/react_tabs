import React, { useCallback, useState, memo } from 'react';

import './App.scss';
import Tabs from './components/Tabs/Tabs';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = memo(() => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const onTabSelected = useCallback((tab: Tab) => {
    setSelectedTab(tab || tabs[0]);
  }, []);

  return (
    <div className="App">
      <h1>
        Selected tab is&nbsp;
        {selectedTab.title}
      </h1>

      <div className="App__tabs">
        <div className="App__tabs-swicher">
          <Tabs
            tabs={tabs}
            selectedTabId={selectedTab.id}
            onTabSelected={onTabSelected}
          />
        </div>
        <p className="App__content">{selectedTab.content}</p>
      </div>
    </div>
  );
});

export default App;
