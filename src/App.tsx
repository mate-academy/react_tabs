import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';
import { Tab } from './type';
import { tabs } from './tabsFromServer';

export const App: React.FC = () => {
  const tabsArr = [...tabs];
  const [isActiveId, onTabSelected] = useState(tabs[0].id);

  const setActiveId = (tab:Tab) => {
    if (isActiveId === tab.id) {
      return;
    }

    onTabSelected(tab.id);
  };

  const activeTab = tabsArr.find(tab => tab.id === isActiveId) || tabsArr[0];

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${activeTab.title}`}
      </h1>
      <Tabs
        tabs={tabsArr}
        activeTab={activeTab}
        setActiveId={setActiveId}

      />
    </div>
  );
};
