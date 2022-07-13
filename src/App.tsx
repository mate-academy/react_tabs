import React, { useState } from 'react';
import Tabs from './Tabs';
import './App.scss';

interface Tab {
  id: string,
  title: string,
  content: string,
}

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const selectHandler = (tab: Tab) => {
    if (selectedTab.id !== tab.id) {
      setSelectedTab(tab);
    }
  };

  return (
    <div className="App">
      <h1>
        Selected tab is&nbsp;
        {tabs.find(tab => tab.id === selectedTab.id)?.title}
      </h1>
      <Tabs
        tabs={tabs}
        onSelect={selectHandler}
      />

      <div
        className="App__content"
        data-cy="tab-content"
      >
        {selectedTab.content}
      </div>
    </div>
  );
};

export default App;
