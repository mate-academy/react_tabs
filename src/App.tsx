import React, { useState } from 'react';
import { Tabs } from './components/Tabs';
import './App.scss';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState<string>(tabs[0].id);

  const onTabSelected = (id: string) => {
    setSelectedTabId(id);
  };

  const tabList = [...tabs];

  return (
    <div className="App">
      <h1>
        Selected tab is&nbsp;
        {tabList.find(tab => tab.id === selectedTabId)?.title}
      </h1>
      <div>
        <Tabs
          tabList={tabList}
          selectedTabId={selectedTabId}
          onTabSelected={onTabSelected}
        />
      </div>
    </div>
  );
};

export default App;
