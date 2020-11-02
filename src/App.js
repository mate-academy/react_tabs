import React from 'react';
import './App.css';
import { Tabs } from './components/tabs';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Question #1',
    content: 'Who are we?',
  },
  {
    title: 'Question #2',
    content: 'Where are we?',
  },
  {
    title: 'Question#3',
    content: 'Where are we going?',
  },
];

const App = () => (
  <div className="App">
    <h1 className="App__title">
      3 main questions in the craft of a programmer
    </h1>
    <Tabs tabs={tabs} index={0} />
  </div>
);

export default App;
