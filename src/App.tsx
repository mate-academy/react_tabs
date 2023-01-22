import React, { useState } from 'react';
import { Tabs } from './components/Tabs';
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

  const onTabSelected = (chosenTab: Tab) => {
    if (chosenTab.id === selectedTabId) {
      return;
    }

    setSelectedTabId(chosenTab.id);
  };

  const title: string = tabs
    .filter(({ id }) => id === selectedTabId)[0].title || tabs[0].title;

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${title}`}
      </h1>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};
