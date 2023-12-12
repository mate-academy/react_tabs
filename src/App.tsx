import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { TabsInfo } from './components/Tabs/TabsInfo';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  return (
    <div className="section">
      <h1 className="title">
        Selected tab is Tab 1
      </h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <TabsInfo tabs={tabs} />
        </div>

        <div className="block" data-cy="TabContent">
          Some text 1
        </div>
      </div>
    </div>
  );
};
