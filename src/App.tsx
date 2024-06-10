import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';
import { Tab } from './types/Tab';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0]?.id);

  const onTabSelected = function (tab: Tab) {
    setSelectedTabId(tab.id);
  };

  const getTabById = function (id: string): Tab | null {
    const foundTab = tabs.find(tab => tab.id === id);

    return foundTab || null;
  };

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is {getTabById(selectedTabId)?.title}
      </h1>

      <div data-cy="TabsComponent">
        {!!tabs.length && (
          <Tabs
            tabs={tabs}
            selectedTabId={selectedTabId}
            onTabSelected={onTabSelected}
          />
        )}
      </div>
    </div>
  );
};
