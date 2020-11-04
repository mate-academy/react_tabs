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
    content: '🐈',
  },
];

const App = () => (
  <div className="App">
    <h1>React Tabs</h1>

    <Tabs tabs={tabs} />
  </div>
);

export default App;
