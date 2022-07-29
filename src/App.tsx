import React, { useCallback, useState } from 'react';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const onTabSelected = useCallback((id) => {
    const selected = tabs.find((t) => t.id === id) || tabs[0];

    setSelectedTab(selected);
  }, []);

  return (
    <div className="App">
      <h1>
        Selected tab is:&nbsp;
        {selectedTab.id}
      </h1>
      <Tabs tabs={tabs} selectedTab={selectedTab} onClick={onTabSelected} />
    </div>
  );
};

export default App;
