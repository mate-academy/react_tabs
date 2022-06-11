import React, { useState } from 'react';
import { Tabs } from './Tabs';

import './App.scss';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [currentSelectedTab, setCurrentSelectedTab] = useState(tabs[0]);

  const setTab = (tab : Tab) => {
    setCurrentSelectedTab(tab);
  };

  return (
    <div className="App">
      <Tabs
        tabsList={tabs}
        selectedTabId={currentSelectedTab.id}
        onTabSelected={setTab}
      />
    </div>
  );
};

export default App;
