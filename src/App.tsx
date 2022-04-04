import './App.scss';
import {
  FC, memo, useCallback, useState,
} from 'react';
import { tabs } from './api/tabs';
import { Tabs } from './components/Tabs';

export const App: FC = memo(() => {
  const [selectedTab, setTab] = useState(tabs[0]);

  const handleTabSelected = useCallback(setTab, []);

  return (
    <div className="App">
      <h1 className="App__selectedTab">
        {`Selected tab is ${selectedTab.title}`}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTab.id}
        onTabSelected={handleTabSelected}
      />
    </div>
  );
});
