import React, { useState } from 'react';

import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

const tabsFromServer: Tab[] = [
  // { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  // { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  // { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabsFromServer[0]);

  return (
    <div className="app">
      <h1 className="app__title">{`Selected tab ${selectedTab.title}`}</h1>
      <div>
        {tabsFromServer.length ? (
          <Tabs
            tabs={tabsFromServer}
            selectedTabId={selectedTab.id}
            onTabSelected={setSelectedTab}
          />
        ) : (
          <h2>Data loading error 404</h2>
        )}

      </div>
    </div>
  );
};

export default App;
