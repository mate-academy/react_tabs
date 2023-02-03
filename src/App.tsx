import { FC, useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';
import { Tabs } from './components/Tabs';
import { tabs } from './truestOfFacts';

export const App: FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="section">
      <h1 className="title">
        Why “Shrek 2” Is the Greatest Sequel Ever Made
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTab.id}
        onTabSelected={setSelectedTab}
      />

      <div className="content" data-cy="TabContent">
        <h2>
          {selectedTab.title}
        </h2>

        <p>
          {selectedTab.content}
        </p>
      </div>
    </div>
  );
};
