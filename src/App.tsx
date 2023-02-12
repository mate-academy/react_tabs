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
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const handlerClick = (tab: Tab) => {
    setSelectedTabId(tab.id);
  };

  const isSelectedTab = tabs.find(tab => selectedTabId === tab.id) || tabs[0];

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${isSelectedTab.title}`}
      </h1>

      <div data-cy="TabsComponent">
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTabId}
          onTabSelected={handlerClick}
        />

        <div className="block" data-cy="TabContent">
          {isSelectedTab.content}
        </div>
      </div>
    </div>
  );
};
