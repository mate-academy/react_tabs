import React from 'react';
import './App.css';
import Tabs from './components/Tabs';

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

const index = 0;

const App = () => (
  <Tabs index={index} tabs={tabs} />
);

export default App;
