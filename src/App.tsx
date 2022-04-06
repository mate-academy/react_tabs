import React, { useCallback, useState } from 'react';
import { Tabs } from './components/Tab';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Home', content: 'Some text 1' },
  { id: 'tab-2', title: 'Profile', content: 'Some text 2' },
  { id: 'tab-3', title: 'Contact', content: 'Some text 3' },
];

const App: React.FC = React.memo(() => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const onTabSelected = useCallback((tab: Tab) => {
    setSelectedTab(tab);
  }, []);

  return (
    <div className="App">
      <h1>
        Selected tab is&nbsp;
        {selectedTab.title}
      </h1>
      <Tabs
        tabs={tabs}
        onTabSelected={onTabSelected}
        selectedTab={selectedTab}
      />
      <p>
        {selectedTab.content}
      </p>
    </div>
  );
});

export default App;
