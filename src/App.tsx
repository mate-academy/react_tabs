import React, { useCallback, useState } from 'react';
import { Tab } from './Types/Tab';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const firstTab: Tab | undefined = tabs[0];

export const App: React.FC = () => {
  const [selectetedTab, setSelectedTab] = useState(firstTab);

  const onTabSelected = useCallback((tab: Tab) => {
    setSelectedTab(tab);
  }, [selectetedTab]);

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectetedTab.title}`}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectetedTab.id}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};
