import React from 'react';
import { Tabs } from './components/Tabs/Tabs';
import './App.css';

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
  <Tabs tabs={tabs} index={0} />
);

export default App;
