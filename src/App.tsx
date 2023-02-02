import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';
import { TabType } from './types/Tab';
import { TabsList } from './api/TabsList';

export const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(TabsList[0]);
  const { id, title } = selectedTab;

  const onTabSelected = (tab: TabType) => {
    setSelectedTab(tab);
  };

  return (
    <div className="section">
      <h1 className="title">{`Selected tab is ${title}`}</h1>

      <Tabs
        tabs={TabsList}
        selectedTabId={id}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};
