import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Tabs } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tab-1');
  const selectedTabId = activeTab.slice(-1);

  const handlerClick = (id: string) => {
    if (id !== tabs[0].id
        || id !== tabs[1].id
        || id !== tabs[2].id
    ) {
      setActiveTab('ab-1');
    }

    setActiveTab(id);
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is Tab ${selectedTabId}`}
      </h1>

      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        selectedTabId={selectedTabId}
        onTabSelected={handlerClick}
      />
    </div>
  );
};
