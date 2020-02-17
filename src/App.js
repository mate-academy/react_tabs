import React from 'react';
import './App.css';
import { Tabs } from './Tabs/Tabs';

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

const App = () => (
  <div className="app-wrapper">
    <Tabs tabs={tabs} />
  </div>
);

export default App;
