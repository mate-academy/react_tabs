import React, { useState } from 'react';

import './App.scss';
import { Tabs } from './components/Tabs';

const tabs: Tab[] = [
  { id: 'Tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'Tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'Tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const handleTabClick = (id: string) => {
    setSelectedTabId(id);
  };

  return (
    <div className="app">
      <h1 className="app__title">
        Selected tab is:
        {' '}
        {selectedTabId}
      </h1>
      <Tabs
        selectedId={selectedTabId}
        tabs={tabs}
        onTabSelected={handleTabClick}
      />
      <div>
        {selectedTabId === tabs[0].id && (
          <p className="app__text">
            {tabs[0].content}
          </p>
        )}
        {selectedTabId === tabs[1].id && (
          <p className="app__text">
            {tabs[1].content}
          </p>
        )}
        {selectedTabId === tabs[2].id && (
          <p className="app__text">
            {tabs[2].content}
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
