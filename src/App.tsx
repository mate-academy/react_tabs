import { FC, useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tab } from './types';
import { Tabs } from './components/Tabs';
import { tabs } from './tabs';

export const App: FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const onTabSelected = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      setSelectedTabId(tab.id);
    }
  };

  const selectedTab = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTab ? selectedTab.title : ''}`}
      </h1>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};
