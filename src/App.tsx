import React, { useState } from 'react';
import { Tabs } from './Tabs';
import './App.scss';
import 'bulma/css/bulma.min.css';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const currentTabId = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div className="App">
      <h1 className="my-container h1">
        {`Selected tab is ${currentTabId?.title} `}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={currentTabId}
        onTabSelected={setSelectedTabId}
      />
    </div>
  );
};

export default App;
