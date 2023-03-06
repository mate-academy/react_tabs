import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Tabs } from './components/Tabs';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTabId, selectedTabIdEdit] = useState(tabs[0].id);
  const currentTab = tabs.find((tab) => tab.id === selectedTabId) || tabs[0];
  const { content, title } = currentTab;

  return (
    <div className="section">
      <h1 className="title">{`Selected tab is ${title}`}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            <Tabs
              tabs={tabs}
              selectedTabId={selectedTabId}
              onTabSelected={selectedTabIdEdit}
            />
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {content}
        </div>
      </div>
    </div>
  );
};
