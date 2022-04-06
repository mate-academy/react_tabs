import React, { useCallback, useState } from 'react';

import './App.scss';
import { Tabs } from './components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = React.memo(() => {
  const selectedTabDefault = tabs[0];
  const [selectedTab, setSelectedTab] = useState(selectedTabDefault);

  const onTabSelected = useCallback((tab: Tab) => {
    setSelectedTab(tab);
  }, []);

  return (
    <div className="App">
      <h1>
        {`Selected tab is: ${selectedTab.title}`}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTab={selectedTab}
        onTabSelected={onTabSelected}
      />
    </div>
  );
});

export default App;
