import React, { useState } from 'react';
import Tabs from './Tabs';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState('tab-1');

  const onTabSelected = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const id = event.currentTarget.hash.slice(1);

    setSelectedTabId(id);
  };

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is Tab
        {' '}
        {selectedTabId.at(-1)}
      </h1>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelected={onTabSelected}
      />
    </div>
  );
};
