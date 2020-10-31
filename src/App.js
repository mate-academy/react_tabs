import React from 'react';
import './App.css';

import { Tabs } from './components';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Home',
    content: 'Some text 1',
  },
  {
    title: 'Profile',
    content: 'Some text 2',
  },
  {
    title: 'Contact',
    content: 'Some text 3',
  },
];

const preparedTabs = tabs.map((tab, index) => ({
  ...tab,
  id: index,
}));

const App = () => (
  <div className="App">
    <h1>React Tabs</h1>

    <Tabs tabs={preparedTabs} id={0} />
  </div>
);

export default App;
