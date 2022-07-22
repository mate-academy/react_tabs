import React, { useState } from 'react';
import { Tabs } from './components/Tabs/Tabs';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTab, setSetselectedTab] = useState(tabs[0]);

  const onSelectedTab = (tab: Tabs) => {
    if (selectedTab.id !== tab.id) {
      setSetselectedTab(tab);
    }
  };

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is&nbsp;
        {selectedTab.title}
      </h1>

      <Tabs
        data-cy="tab-content"
        tabs={tabs}
        selectedTab={selectedTab}
        onSelectedTab={onSelectedTab}
      />
    </div>
  );
};

export default App;
