import React, { useState } from 'react';
import { Tabs } from './components/Tabs';
import { tabs } from './source/tabs';

import './App.scss';

export const App: React.FC = React.memo(() => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="app">
      <h1 className="app__title">
        {`Selected tab is ${activeTab.title}`}
      </h1>

      <Tabs
        tabs={tabs}
        activeTabId={activeTab.id}
        onActiveTab={setActiveTab}
      />
    </div>
  );
});
