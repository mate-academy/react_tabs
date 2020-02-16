import React from 'react';
import './App.css';

import { Tabs } from './components/Tabs/Tabs';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Tab 1',
    content: 'Some text 1',
  },
  {
    title: 'Tab 2',
    content: 'Some text 2',
  },
  {
    title: 'Tab 4',
    content: 'Some text 3',
  },
  {
    title: 'Tab 4',
    content: 'Some text 4',
  },
];

const preparedTabs = tabs.map((tab, i) => {
  const newTab = {
    ...tab, id: i,
  };

  return newTab;
});

const App = () => (
  <Tabs tabs={preparedTabs} />
);

export default App;
