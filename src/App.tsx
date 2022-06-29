import React, { useState } from 'react';
import { Tabs } from './Tabs';
import 'bulma/css/bulma.min.css';
import './App.scss';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const selectTab = (tab: Tab) => {
    return setSelectedTab(tab);
  };

  return (
    <div className="App level-item has-text-centered">
      <h1 className="title is-1">
        Selected tab is&nbsp;
        {selectedTab.title}
      </h1>
      <Tabs
        tabs={tabs}
        onTabSelected={selectTab}
      />
      <section className="App__Content">
        <p>{selectedTab.content}</p>
      </section>
    </div>
  );
};

export default App;
