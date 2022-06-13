import React, { useState } from 'react';
import { Tabs } from './Tabs';
import './App.scss';

import { Tab } from './react-app-env';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Home', content: 'Some text 1' },
  { id: 'tab-2', title: 'Profile', content: 'Some text 2' },
  { id: 'tab-3', title: 'Contact', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTab, setselectedTab] = useState(tabs[0]);

  const onTabSelected = (tab: Tab) => {
    setselectedTab(tab);
  };

  return (
    <div className="App">
      <h1>
        Selected tab is&nbsp;
        {selectedTab.title}
      </h1>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTab.id}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};

export default App;
