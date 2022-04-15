import React, { useState } from 'react';
import './App.scss';
import { Tabs } from './components/Tabs';
import { tabs } from './tabs';

const App: React.FC = () => {
  const [selectTab, setSelectTab] = useState(tabs[0]);

  return (
    <div>
      <h1>
        Selected tab is
        {` ${selectTab.title}`}
      </h1>
      <Tabs selectTab={selectTab} setSelectTab={setSelectTab} tabs={tabs} />
    </div>
  );
};

export default App;
