import React from 'react';
import './App.css';
import Tabs from './components/Tabs/Tabs';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Home',
    content: 'Some text 1',
  },
  {
    title: 'Profile',
    content: 'Some text 2',
  },
  {
    title: 'Contact',
    content: 'Some text 3',
  },
];

const App = () => (
  <Tabs tabs={tabs} />
);

export default App;
