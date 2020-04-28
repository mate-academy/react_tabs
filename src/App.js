import React from 'react';
import './App.css';
import Tabs from './Tabs';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'London',
    content: 'Paris is the capital of England.',
  },
  {
    title: 'Paris',
    content: 'Paris is the capital of France.',
  },
  {
    title: 'Tokyo',
    content: 'Tokyo is the capital of Japan',
  },
];

const App = () => (
  <Tabs tabs={tabs} />
);

export default App;
