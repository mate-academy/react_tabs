import React from 'react';
import './App.css';
import Tabs from './components/Tabs';

const tabs = [
  {
    title: 'Tab 1',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.1',
  },
  {
    title: 'Tab 2',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam quod 2',
  },
  {
    title: 'Tab 3',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. , rerum 3',
  },
  {
    title: 'Tab 4',
    content:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit.  4',
  },
];

const App = () => (
  <>
    <Tabs tabs={tabs} />
  </>
);

export default App;
