import React, { useState } from 'react';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const handleSelectedTab = (tab: Tab) => {
    if (tab.id !== selectedTab.id) {
      setSelectedTab(tab);
    }
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTab.title}`}
      </h1>

      <div>
        <div className="tabs is-boxed">
          <Tabs
            tabs={tabs}
            selectedTab={selectedTab.id}
            handleSelectedTab={handleSelectedTab}
          />
        </div>

        <div className="block" data-cy="tab-content">
          {selectedTab.content}
        </div>
      </div>
    </div>
  );
};

export default App;
