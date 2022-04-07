import React, { useState } from 'react';
import { Tabs } from './components/Tabs';
import { tabs } from './source/tabs';

import './App.scss';

export const App: React.FC = React.memo(() => {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];
  const selectTab = (tabId: string) => setActiveTabId(tabId);

  return (
    <div className="app">
      <h1 className="app__title">
        Selected brand is&nbsp;
        <big className="app__title--big">
          {activeTab.title}
        </big>
      </h1>

      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        activeTabId={activeTabId}
        onActiveTab={selectTab}
      />
    </div>
  );
});
