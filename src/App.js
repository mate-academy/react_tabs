import React from 'react';
import './App.css';
import Tabs from './Components/Tabs/Tabs';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Tab 1',
    content: 'Some text 1',
    id: 1,
  },
  {
    title: 'Tab 2',
    content: 'Some text 2',
    id: 2,
  },
  {
    title: 'Tab 3',
    content: 'Some text 3',
    id: 3,
  },
];

const App = () => (
  <Tabs tabs={tabs} />
);

export default App;
