import React, { useCallback, useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs/Tabs';
import { Tab } from './types/Tab';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [tab, setTab] = useState(tabs[0]);

  const selectTab = useCallback((newTab: Tab) => {
    setTab(newTab);
  }, [setTab]);

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${tab.title}`}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={tab.id}
        onTabSelected={selectTab}
      />
    </div>
  );
};
