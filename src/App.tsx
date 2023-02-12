import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';
import { Tab } from './components/typeTab';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [tabId, setTabId] = useState(tabs[0].id);
  const [title, setTitle] = useState(tabs[0].title);

  const setAnotherTab = (clickedTab:Tab) => {
    const anotherTab = tabs.find(tab => tab.id === clickedTab.id);

    if (anotherTab) {
      (setTabId(anotherTab.id));
      (setTitle(anotherTab.title));
    }
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${title}`}
      </h1>

      <Tabs
        tabs={tabs}
        onTabSelected={setAnotherTab}
        selectedTabId={tabId}
      />
    </div>
  );
};
