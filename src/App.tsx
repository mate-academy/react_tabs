import React, { useState } from 'react';
import { Tabs } from './Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const onSelected = (tab: Tab) => {
    setSelectedTabId(tab.id);
  };

  return (
    <div className="App">
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onSelected={onSelected}
      />
    </div>
  );
};

export default App;
