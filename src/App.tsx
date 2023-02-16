import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState('tab-1');

  const getselectedTabId = (id: string) => {
    setSelectedTabId(id);
  };

  const tabSelectText = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is
        {' '}
        {tabSelectText?.title}
      </h1>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <Tabs
            tabs={tabs}
            selectedTabId={selectedTabId}
            getSelectedTabId={getselectedTabId}
          />
        </div>
        <div className="block" data-cy="TabContent">
          {tabSelectText?.content}
        </div>
      </div>
    </div>
  );
};
