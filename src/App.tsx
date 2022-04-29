import { useState } from 'react';

import './App.scss';
import { Tabs } from './components/Tabs';
import { tabs } from './tabs';

const App: React.FC = () => {
  const [selectedTab, setselectedTabId] = useState(tabs[0]);

  return (
    <div className="App">
      <h1>
        Selected tab is
        {selectedTab.title}
      </h1>
      <Tabs
        tabs={tabs}
        selectedTabId={selectedTab.id}
        onTabSelected={setselectedTabId}
      />
    </div>
  );
};

export default App;
