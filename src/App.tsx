import React, { useState } from 'react';
import { Tab } from './react-app-env';
import { Tabs } from './components/Tabs';

import './App.scss';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState('tab-1');

  const onTabSelected = (tabId: string): void => (
    setSelectedTabId(tabId)
  );

  const findTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div className="App has-text-centered column is-half is-offset-one-quarter">
      <h1 className="title is-2">
        {`Selected tab is ${findTab?.title}`}
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
