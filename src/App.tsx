import React, { useState } from 'react';

import { Tabs } from './components/Tabs';
import { Tab } from './components/types/Tab';

import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTabId, setselectedTabId] = useState(tabs[0]);

  const tabSelection = (tab: Tab) => {
    setselectedTabId(tab);
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectedTabId.title}`}
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <Tabs
            tabs={tabs}
            selectedTabId={selectedTabId.id}
            onTabSelected={tabSelection}
          />
        </div>

        <div className="block" data-cy="TabContent">
          {selectedTabId.content}
        </div>
      </div>
    </div>
  );
};
