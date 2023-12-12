import { FC, useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tab } from './types';
import { Tabs } from './components/Tabs';
import { tabs } from './tabs';

export const App: FC = () => {
  const [selectedTabId, setSelectedTabId] = useState('tab-1');

  const onTabSelect = (tab: Tab) => {
    setSelectedTabId(tab.id);
  };

  return (
    <div className="section">
      <h1 className="title">
        {`Selected tab is Tab ${selectedTabId.slice(4)}`}
      </h1>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelect={onTabSelect}
      />
    </div>
  );
};
