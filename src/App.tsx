import { FC, useState } from 'react';
import { Tabs } from './components/Tabs/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const onTabSelected = (newTab: Tab) => {
    if (newTab.id !== selectedTab.id) {
      setSelectedTab(newTab);
    }
  };

  return (
    <div className="app">
      <h1 className="app__header">
        Selected tab is &nbsp;
        {selectedTab.title}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTab.id}
        handleTab={onTabSelected}
      />
    </div>
  );
};

export default App;
