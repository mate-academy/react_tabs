import React, { useState } from 'react';

import './App.scss';
import { Tabs } from './Tabs';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTabId, setContent] = useState(tabs[0].id);

  const choseTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div className="App">
      <h1>
        {`Select tab is ${choseTab?.title}`}
      </h1>
      <Tabs
        tabs={tabs}
        selectedTabId={choseTab}
        onTabSelected={setContent}
      />
    </div>
  );
};

export default App;
