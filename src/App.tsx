import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs, Tab } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);
  const selectedTab : Tab = tabs.find(
    tab => tab.id === selectedTabId,
  ) || tabs[0];

  const onTabSelected = (selectedId: string) => {
    setSelectedTabId(selectedId);
  };

  const { title, content } = selectedTab;

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is
        {' '}
        {title}
      </h1>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={onTabSelected}
      />
      <div className="block" data-cy="tab-content">
        {content}
      </div>
    </div>
  );
};
