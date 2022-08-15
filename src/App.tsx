import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Tabs } from './components/Tabs/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${tabs[selectedTab].title}`}
      </h1>

      <div>
        <div className="tabs is-boxed">
          <Tabs
            tabs={tabs}
            select={selectedTab}
            onChange={(index:number) => {
              setSelectedTab(index);
            }}
          />
        </div>

        <div className="block" data-cy="tab-content">
          {tabs[selectedTab].content}
        </div>
      </div>
    </div>
  );
};

export default App;
