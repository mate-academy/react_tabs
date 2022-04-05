import './App.scss';
import {
  FC, memo, useState,
} from 'react';
import { tabs } from './api/tabs';
import { Tabs } from './components/Tabs';

export const App: FC = memo(() => {
  const [selectedTab, setTab] = useState(tabs[0]);

  return (
    <div className="App">
      <h1 className="App__selectedTab">
        {`Selected tab is ${selectedTab.title}`}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTab.id}
        onTabSelected={setTab}
      />
    </div>
  );
});
