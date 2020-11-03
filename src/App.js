import React from 'react';
import { Tabs } from './components/Tabs';
import './App.css';

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
  <div className="tabs">
    <h1 className="tabs__title">
      React tabs
    </h1>

    <Tabs tabs={tabs} />
  </div>
);

export default App;
