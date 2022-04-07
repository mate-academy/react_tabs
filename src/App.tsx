import React, { useCallback, useState } from 'react';

import './App.scss';
import { Tabs } from './component/tabs';

interface Tab {
  id: string,
  title: string,
  content: string,
}

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selectTab, setSelectTab] = useState(tabs[0].id);
  const onTabSelected = useCallback((tab: Tab) => {
    setSelectTab(tab.id || tabs[0].id);
  }, []);

  return (
    <>
      <h1>
        Selected tab is&nbsp;
        {selectTab}
      </h1>
      <Tabs
        tabs={tabs}
        onTabSelected={onTabSelected}
        selectedTabId={selectTab}
      />
    </>
  );
};

export default App;
