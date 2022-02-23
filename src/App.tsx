import React, { useState } from 'react';

import './App.scss';
import { Tabs } from './components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const {
    id: firstTabId,
    title: firstTabTitle,
  } = tabs[0];
  const [selectedTabId, setSelectedTabId] = useState(firstTabId);
  const [selectedTabTitle, setSelectedTabTitle] = useState(firstTabTitle);

  const onTabSelected = (tab: Tab) => {
    const { id, title } = tab;

    setSelectedTabId(id);
    setSelectedTabTitle(title);
  };

  return (
    <div className="App">
      <h1>
        Selected tab is
        {' '}
        {selectedTabTitle}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};

export default App;
