import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Tabs } from './components/Tabs/Tabs';
import { Tab } from './components/types/Tab';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const onTabSelected = (tab: Tab): void => {
    const newTab = tabs.find(link => link.id === tab.id) || tabs[0];
    const ind = tabs.indexOf(newTab);

    setSelectedTab(tabs[ind]);
  };

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is&nbsp;
        {selectedTab.title}
      </h1>

      <div>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTab.id}
          onTabSelected={onTabSelected}
        />

      </div>
    </div>
  );
};

export default App;
