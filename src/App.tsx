import React, { useState } from 'react';
import './App.scss';
import { Tab, Tabs } from './components/Tabs/Tabs';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectTab, setSelectTab] = useState(tabs[0]);

  const handleSelectTab = (tab: Tab) => {
    if (tab.id !== selectTab.id) {
      setSelectTab(tab);
    }
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is ${selectTab.title}`}
      </h1>

      <Tabs
        selectTab={selectTab}
        tabs={tabs}
        handleSelectTab={handleSelectTab}
      />
    </div>
  );
};

export default App;
