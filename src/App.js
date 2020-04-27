import React from 'react';
import Tabs from './Tabs';
import './App.css';

const tabs = [
  {
    id: 1,
    title: 'Tab 1',
    content: 'Some text 1',
  },
  {
    id: 2,
    title: 'Tab 2',
    content: 'Some text 2',
  },
  {
    id: 3,
    title: 'Tab 3',
    content: 'Some text 3',
  },
];

const App = () => (
  <div>
    <h1>React tabs</h1>
    <Tabs tabs={tabs} />
  </div>
);

export default App;
