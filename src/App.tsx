import React, { useState } from 'react';
import { Tabs } from './components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App: React.FC = () => {
  const [selectedTab, setTab] = useState(tabs[0]);

  const onTabSelected = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const newTab = tabs.find(tab => (
      tab.id === event.currentTarget.value
    ));

    if (newTab) {
      setTab(newTab);
      setTabId(newTab.id);
    }
  };

  return (
    <div className="App">
      <h1>
        Selected tab is&nbsp;
        {selectedTab.title}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTab.id}
        callback={onTabSelected}
      />
    </div>

  );
};
