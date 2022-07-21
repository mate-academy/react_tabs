import React, { useState } from 'react';
import { Tabs } from './components/Tabs/Tabs';
import './App.scss';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const preparedTabs = tabs.map((tab, i) => ({ ...tab, index: i }));

export const App: React.FC = () => {
  const [selectedTabID, setTabID] = useState(0);

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${preparedTabs[selectedTabID].id}`}
      </h1>
      <Tabs
        preparedTabs={[...preparedTabs]}
        selectedTabID={selectedTabID}
        setTabID={setTabID}
      />
    </div>
  );
};

export default App;
