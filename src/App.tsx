import { FC, useState } from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: '' },
  { id: 'tab-2', title: 'Tab 2', content: '' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="app">
      {tabs.length
        ? (
          <>
            <h1 className="app_title">
              Selected tab is Tab
              {' '}
              {selectedTab + 1}
            </h1>
            <Tabs
              tabs={tabs}
              selectedTabId={tabs[selectedTab].id}
              onTabSelected={setSelectedTab}
            />
          </>
        )
        : (
          <h1 className="app_title">
            No tabs
          </h1>
        )}
    </div>
  );
};

export default App;
