import React, { useState } from 'react';

import './App.scss';
import { Tabs } from './components/Tabs/Tabs';
import { Tab } from './types';

const tabsFromServer: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabsFromServer[0].id);

  const onSelectTab = (id: string) => {
    setSelectedTabId(id);
  };

  return (
    <div className="App">
      <Tabs
        tabs={tabsFromServer}
        selectTab={onSelectTab}
        selectedTabId={selectedTabId}
      />
    </div>
  );
};

export default App;
