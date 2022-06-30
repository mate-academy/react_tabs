import React, { useState } from 'react';

import './App.scss';
import { Tab } from './react-app-env';
import { Tabs } from './Tabs';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <div className="App">
      <Tabs
        tabs={tabs}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};

export default App;
