import React from 'react';
import { Tab } from './react-app-env.d';
import { Tabs } from './components/Tabs';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [tabId, setTabId] = React.useState(tabs[0].id);

  const changeTab = (tab: Tab) => {
    setTabId(tab.id);
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${tabs.find(tab => tab.id === tabId)?.title}`}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={tabId}
        onTabSelected={changeTab}
      />
    </div>
  );
};
