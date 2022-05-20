import React, { useState } from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const startTab = tabs.length > 0 ? tabs[0] : null;

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(startTab);

  const onTabSelected = (newTabs: Tab) => {
    if (selectedTab && newTabs.id !== selectedTab.id) {
      setSelectedTab(newTabs);
    }
  };

  return (
    <div className="app">
      {
        selectedTab ? (
          <>
            <h1 className="app__h1">
              Selected tab is:&nbsp;
              {selectedTab.title}
            </h1>

            <Tabs
              tabs={tabs}
              chooseId={selectedTab.id}
              tabChoose={onTabSelected}
            />
          </>
        ) : <p>Error</p>
      }
    </div>
  );
};

export default App;
