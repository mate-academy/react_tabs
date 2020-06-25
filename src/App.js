import React from 'react';
import './App.css';
import { TabList } from './components/TabList/TabList';

const tabs = [
  {
    title: 'Home',
    content: `Some text 1 Some text 1 Some text 1 Some text 1
              Some text 1 Some text 1 Some text 1 Some text 1
              Some text 1 Some text 1 Some text 1 Some text 1`,
  },
  {
    title: 'Profile',
    content: `Some text 2 Some text 2 Some text 2 Some text 2
              Some text 2 Some text 2 Some text 2 Some text 2
              Some text 2 Some text 2 Some text 2 Some text 2`,
  },
  {
    title: 'Contact',
    content: `Some text 3 Some text 3 Some text 3 Some text 3
              Some text 3 Some text 3Some text 3 Some text 3
              Some text 3 Some text 3 Some text 3 Some text 3`,
  },
];

const App = () => (
  <TabList tabs={tabs} />
);

export default App;
