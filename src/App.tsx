import React, { useState, useEffect } from 'react';
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
  const [selectedTabId, onTabSelected] = useState('tab-1');
  let selectedTitle = 'Tab 1';

  const preventDef = (event: MouseEvent) => {
    event.preventDefault();
  };

  tabs.map((tab) => {
    if (selectedTabId === tab.id) {
      selectedTitle = tab.title;
    }

    return 0;
  });

  useEffect(() => {
    window.addEventListener('click', preventDef);
  }, []);

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTitle}`}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => {
              return (
                <li
                  key={tab.id}
                  className={selectedTabId === tab.id
                    ? 'is-active'
                    : ''}
                  data-cy="Tab"
                >
                  <a
                    key={tab.id}
                    href={tab.title}
                    onClick={() => onTabSelected(tab.id)}
                  >
                    {tab.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="block" data-cy="TabContent">
          <Tabs
            tabsArr={tabs}
            selectedTabId={selectedTabId}
          />
          {tabs.map((tab) => {
            return (
              <span key={tab.id}>
                {selectedTabId === tab.id ? tab.content : ''}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
