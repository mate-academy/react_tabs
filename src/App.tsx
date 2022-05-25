import React, { useState } from 'react';
import Tabs from './components/Tabs';

import './App.scss';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTab, changeTab] = useState(tabs[0]);

  const onTabSelected = (tabsItem: Tab) => {
    const findTab = tabs.find(tab => tab.id === tabsItem.id) || tabs[0];

    changeTab(findTab);
  };

  return (
    <div className="App">
      <h1
        style={{ color: 'green' }}
      >
        Selected tab is
        <b style={{ color: 'blue' }}>
          &nbsp;
          {selectedTab.title}
        </b>
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
