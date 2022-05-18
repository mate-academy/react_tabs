import React, { useState } from 'react';

import { Tab } from './components/Tab';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: '9:00', content: 'Morning tasks' },
  { id: 'tab-2', title: '10:00', content: 'FE lesson' },
  { id: 'tab-3', title: '12:30', content: 'English lesson' },
  { id: 'tab-4', title: '15:00', content: 'Interview' },
];

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="tabs">
      <h1 className="tabs__title">My day</h1>

      <h2 className="tabs__subtitle">
        Selected time is&nbsp;
        {selectedTab.title}
      </h2>
      <Tab
        tabs={tabs}
        onTabSelected={setSelectedTab}
        selectedTabId={selectedTab.id}
      />
    </div>
  );
};

export default App;
