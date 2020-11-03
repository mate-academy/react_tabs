import React from 'react';
import './App.css';
import { Tabs } from './Components/Tabs';

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
  <div className="app">
    <h1 className="app__title">React tabs</h1>
    <Tabs tabs={tabs} />
  </div>
);

export default App;
