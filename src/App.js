import React from 'react';
import './App.css';

import { Tabs } from './components/tabs/Tabs';

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
    title: 'Tab 3',
    content: 'Some text 3',
  },
];

const preparedTabs = tabs.map((tab, index) => ({
  ...tab,
  id: index,
}));

const App = () => (
  <div className="container card text-center px-0 w-75">
    <Tabs tabs={preparedTabs} />
  </div>
);

export default App;
