import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Tabs } from './components/Tabs/Tabs';
import { Tab } from './interfaces/Tab';

export const tabsFromServer = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [selectedTab, setSelectedTab] = useState('-1');

  const onTabSelected = (tabId: string) => {
    setSelectedTab(tabId);
  };

  useEffect(() => {
    setTabs(tabsFromServer);
  }, []);

  return (
    <div className="section">
      <h1 className="title">
        {tabs.length !== 0 ? (
          <>
            Selected tab is&nbsp;
            {tabs.find(tab => tab.id === selectedTab)?.title
              || 'empty'}
          </>
        ) : (
          <>
            There is no tabs
          </>
        )}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTab}
        onTabSelect={onTabSelected}
      />
    </div>
  );
};

export default App;
