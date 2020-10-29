import React from 'react';
import './App.css';
import { Tabs } from './components/Tabs/Tabs';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Tab 1',
    content: 'Liverpool is the champion',
  },
  {
    title: 'Tab 2',
    content: 'of Premier League',
  },
  {
    title: 'Tab 3',
    content: 'first time for the last 30 years',
  },
];

const App = () => (
  <>
    <h1 className="heading">React tabs</h1>
    <Tabs tabs={tabs} />
  </>
);

export default App;
