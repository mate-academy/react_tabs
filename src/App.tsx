import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Tabs } from './components/Tabs';
import { Tab } from './types/Tab';

import tabs from './api/tabs';

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const switchTab = (tab: Tab) => {
    setSelectedTabId(tab.id);
  };

  return (
    <div className="section">
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={switchTab}
      />
    </div>
  );
};
