import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs, tabs as tabsData } from './components/Tabs';

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabsData[0].id);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');

      if (hash && tabsData.some(tab => tab.id === hash)) {
        setSelectedTabId(hash);
      }
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabSelected = (tab: (typeof tabsData)[0]) => {
    setSelectedTabId(tab.id);
    window.history.replaceState(null, '', `#${tab.id}`);
  };

  const selectedTab =
    tabsData.find(tab => tab.id === selectedTabId) || tabsData[0];

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is {selectedTab ? selectedTab.title : 'Tab 1'}
      </h1>

      <Tabs
        tabs={tabsData}
        selectedTabId={selectedTabId}
        onTabSelected={handleTabSelected}
      />
    </div>
  );
};
