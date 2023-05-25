import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';
import { Tab } from './react-app-env';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState<string>(tabs[0].id);
  const [title, setTitle] = useState(tabs
    .filter(tab => selectedTabId === tab.id)[0].title);

  const onTabSelected = (tab:Tab) => {
    setTitle(tabs
      .filter(tabItem => tab.id === tabItem.id)[0].title);
    setSelectedTabId(tab.id);
  };

  useEffect(() => {
    setTitle(tabs
      .filter(tabItem => selectedTabId === tabItem.id)[0].title);
  }, [selectedTabId]);

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${title}`}
      </h1>

      <Tabs
        selectedTabId={selectedTabId}
        tabs={tabs}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};
