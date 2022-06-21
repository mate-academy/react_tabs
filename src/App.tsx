import React, { useState } from 'react';
import { Tab } from './react-app-env';
import './App.scss';
import { Tabs } from './Tabs';
import 'bulma/css/bulma.min.css';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [currentTabs] = useState(tabs);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const selectHandler = (tab: Tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="App box has-text-centered">
      <h1 className="title is-1">
        Selected tab is&nbsp;
        {tabs.find(tab => tab.id === selectedTab.id)?.title}
      </h1>

      <Tabs
        tabs={currentTabs}
        onSelect={selectHandler}
        selectedTabId={selectedTab.id}
      />
    </div>
  );
};

export default App;
