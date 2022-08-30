import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import { Tabs } from './components/Tabs/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [tabId, setTabId] = useState('tab-1');

  return (
    <div className="section">
      <h1 className="title">
        Selected tab is&nbsp;
        {tabs.find(tabText => tabId === tabText.id)?.title}
      </h1>

      <div>
        <Tabs
          tabs={tabs}
          tabId={tabId}
          setTabId={setTabId}
        />
      </div>
    </div>
  );
};

export default App;
