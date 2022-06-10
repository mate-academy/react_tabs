import React, { useState } from 'react';
import { Tabs } from './Tabs';

import './App.scss';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);
  const title = tabs.find(tab => tab.id === selectedTabId)?.title;

  return (
    <div className="App">
      <h1 className="box title">
        Selected tab is&nbsp;
        {title}
      </h1>

      <Tabs
        arrTabs={tabs}
        selTabId={selectedTabId}
        onChangeButton={setSelectedTabId}
      />
    </div>
  );
};

export default App;
