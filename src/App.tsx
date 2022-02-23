import React, { useState } from 'react';
import Tabs from './components/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);
  const [selectedTabTitle, setSelectedTabTitle] = useState(tabs[0].title);

  const onTabChange = (tab: Tab) => {
    setSelectedTabId(tab.id);
    setSelectedTabTitle(tab.title);
  };

  return (
    <div className="App">
      <h1>{`Selected tab is\xA0${selectedTabTitle}`}</h1>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabChange={onTabChange}
      />
    </div>
  );
};

export default App;
