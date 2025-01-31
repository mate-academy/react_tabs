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

export type Tab = {
  id: string;
  title: string;
  content: string;
};

export const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

  const handleTabSelected = (
    tab: Tab,
    event: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    event.preventDefault();
    setSelectedTabId(tab.id);
  };

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is{' '}
        {tabs.map(tab => {
          if (tab.id === selectedTabId) {
            return tab.title;
          }

          return;
        })}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              return (
                <Tabs
                  tab={tab}
                  key={tab.id}
                  selectedTab={selectedTabId}
                  onTabSelected={handleTabSelected}
                />
              );
            })}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {tabs.map(tab => {
            if (tab.id === selectedTabId) {
              return tab.content;
            }

            return;
          })}
        </div>
      </div>
    </div>
  );
};
