import React, { useState } from 'react';
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
  const selectedTab = tabs.find((tab) => tab.id === selectedTabId) || tabs[0];

  return (
    <div className="section">
      <h1 className="title">{`Selected tab is ${selectedTab.title}`}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => {
              const isActive = tab.id === selectedTabId;

              return (
                <li
                  className={isActive ? 'is-active' : ''}
                  data-cy="Tab"
                  key={tab.id}
                >
                  <a
                    href={`#${tab.id}`}
                    data-cy="TabLink"
                    onClick={(event) => {
                      event.preventDefault();
                      setSelectedTabId(tab.id);
                    }}
                  >
                    {tab.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTab.content}
        </div>
      </div>
    </div>
  );
};
