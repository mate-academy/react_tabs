/* eslint-disable max-len */
import React, { useState } from 'react';
/* import { Tabs } from './components/Tabs'; */
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const currentTab = function selectTab(title: string | null) {
    return tabs.find(tab => tab.title === title);
  };

  const [selectedTab, setSelectedTab] = useState(currentTab('Tab 1'));

  return (
    <div className="section">
      <h1 className="title">
        {'Selected tab is Tab '}
        {selectedTab?.title.slice(-1)}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                className="is-active"
                data-cy={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={(event) => {
                    setSelectedTab(currentTab(event.currentTarget.textContent));
                  }}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTab?.content}
        </div>
      </div>
    </div>
  );
};
