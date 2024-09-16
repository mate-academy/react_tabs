import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';

export type Tab = { id: string; title: string; content: string };

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const tabIds: Tab['id'][] = tabs.map((tab: Tab) => tab.id);

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabIds[0]);

  useEffect(() => {
    if (!tabIds.includes(selectedTabId)) {
      setSelectedTabId(tabIds[0].toString());
    }
  }, [selectedTabId]);

  const onTabSelected = (tab: Tab) => {
    if (tab.id !== selectedTabId) {
      setSelectedTabId(tab.id);
    }
  };

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is{' '}
        {tabs.find((tab: Tab) => tab.id === selectedTabId)?.title}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <Tabs
            tabs={tabs}
            selectedTabId={selectedTabId}
            onTabSelected={onTabSelected}
          />
        </div>
      </div>
    </div>
  );
};
