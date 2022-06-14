/* eslint-disable max-len */
import React, { useState } from 'react';
import './App.scss';
import { Tabs } from './Tabs';

export const tabs: Tab[] = [
  {
    id: 'tab-1',
    title: 'Tab 1',
    content: '--Some text 1-- Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 'tab-2',
    title: 'Tab 2',
    content: '--Some text 2-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae'
  },
  {
    id: 'tab-3',
    title: 'Tab 3',
    content: '--Some text 3-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, eaque rerum!'
  },
];

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [selectedId, setSelectedId] = useState(tabs[0].id);

  return (
    <div className="App">
      <h1>
        {`Selected tab is ${selectedTab.title}`}
      </h1>
      <Tabs
        tabs={tabs}
        selectedId={selectedId}
        selectedTab={selectedTab}
        setSelectedId={setSelectedId}
        setSelectedTab={setSelectedTab}
        data-cy="tab-content"
      />
    </div>
  );
};

export default App;
