import React, { useState } from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [tab, setTab] = useState(tabs[0]);

  const tabSelect = (newTabs: Tab) => {
    setTab(newTabs);
  };

  return (
    <div className="app">
      <h1 className="app__h1r">
        Selected tab is:
        {' '}
        {tab.title}
      </h1>

      <Tabs
        tabs={tabs}
        chooseId={tab.id}
        tabChoose={tabSelect}
      />
    </div>
  );
};

export default App;
