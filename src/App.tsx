import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { Tabs } from './components/Tabs/Tabs';
import { TabsInterface } from './Types/TabsInterface';

export const tabs: TabsInterface[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [onTabSelected, setOnTabSelected] = useState(tabs[0]);

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${onTabSelected.title}`}
      </h1>

      <div>
        <Tabs
          tabs={tabs}
          onTabSelected={onTabSelected}
          setOnTabSelected={setOnTabSelected}
        />
      </div>
    </div>
  );
};

export default App;
