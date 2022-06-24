import React, { useState } from 'react';
import { Tabs } from './Tabs';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div>
      <h1>
        Selected tab is&nbsp;
        {selectedTab.title}
      </h1>
      <Tabs
        tabs={tabs}
        selectedTab={selectedTab}
        changeTab={setSelectedTab}
      />
    </div>
  );
};

export default App;
