import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';
import { Tab } from './types/Tab';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const onTabSelected = (
    selectTab: Tab,
  ) => {
    const chosenTab = tabs.find(tabEl => selectTab.id === tabEl.id);

    if (chosenTab) {
      setSelectedTab(chosenTab);
    }
  };

  return (
    <div className="section">
      <h1 className="title">

        {`Selected tab is ${selectedTab.title}`}
      </h1>

      <Tabs
        tabs={tabs}
        onTabSelected={onTabSelected}
        selectTabObj={selectedTab}
      />

    </div>
  );
};
