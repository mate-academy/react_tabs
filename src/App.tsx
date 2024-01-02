import { useState, FC } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';
import { tabs } from './tabData';
import { Tab } from './types';

export const App: FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);
  const activeTab
    = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const selectTab = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      setSelectedTabId(tab.id);
    }
  };

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is
        {' '}
        {activeTab.title}
      </h1>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={selectTab}
      />
    </div>
  );
};
