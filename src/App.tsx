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
  const [selectedTabId, selectedTabIdEdit] = useState('tab-1');
  const selectedForm = tabs.filter((tab) => tab.id === selectedTabId);
  const [content, title] = selectedForm;

  return (
    <div className="section">
      <h1 className="title">{`Selected tab is ${title}`}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map((tab) => (
              <Tabs
                key={tab.id}
                tab={tab}
                selectId={selectedTabId}
                onTabSelected={selectedTabIdEdit}
              />
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {content}
        </div>
      </div>
    </div>
  );
};
