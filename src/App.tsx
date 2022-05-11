import React, { useState } from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTabId, setSelectedTab] = useState(tabs[0].id);

  return (
    <div className="App">
      <h1 className="App__title">
        Selected tab is&nbsp;
        {tabs.find(tab => tab.id === selectedTabId)?.title}
      </h1>

      <div className="App__counter">
        {`Total tabs ${tabs.length}`}
      </div>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        setSelectedTab={setSelectedTab}
      />
    </div>
  );
};

export default App;
