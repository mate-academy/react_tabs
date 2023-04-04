import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { tabs, Tabs } from './components/Tabs';

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState({
    title: 'Tab 1',
    content: 'Some text 1',
  });

  const onTabSelected = (idTab: string) => {
    const found = tabs.find(tab => tab.id === idTab) || null;

    if (found) {
      setSelectedTabId({
        title: found.title,
        content: found.content,
      });
    }
  };

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is
        {' '}
        {selectedTabId.title}
      </h1>

      <Tabs selectedTabId={selectedTabId} onTabSelected={onTabSelected} />

      <div className="block" data-cy="TabContent">
        {selectedTabId.content}
      </div>
    </div>
  );
};
