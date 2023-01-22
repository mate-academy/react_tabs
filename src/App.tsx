import React, { useState } from 'react';
import Tabs from './Tabs';
import { Tab } from './types/tab';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState<string>(tabs[0].id);

  const handleTabSelected = (chosenTab: Tab) => {
    // console.log('callback calling');

    setSelectedTabId(chosenTab.id);
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTabId}`}
      </h1>
      <Tabs
        tabs={tabs}
        // selectedTab={selectedTab}
        selectedTabId={selectedTabId}
        handleTabSelected={handleTabSelected}
      />
    </div>
  );
};
