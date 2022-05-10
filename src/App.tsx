import React, { useState } from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

const tabs: Tab[] = [
  {
    id: 'home',
    title: 'Home',
    content: 'Welcome to the Mate Academy home page',
  },
  {
    id: 'about',
    title: 'About',
    content: 'We are Mate Academy',
  },
  {
    id: 'company',
    title: 'Profile',
    content: 'We teach React, JS, Python and many more',
  },
];

const App: React.FC = () => {
  const [selectedTabId, setSelectedTabId] = useState('home');
  const [selectedTabTitle, setSelectedTabTitle] = useState('Home');

  const handleTabSelect = (tab: Tab) => {
    setSelectedTabId(tab.id);
    setSelectedTabTitle(tab.title);
  };

  return (
    <div className="App">
      <h1>
        {'Selected tab is: '}
        {selectedTabTitle}
      </h1>

      <Tabs
        tabs={tabs}
        selectedTabId={selectedTabId}
        onTabSelect={handleTabSelect}
      />

    </div>
  );
};

export default App;
