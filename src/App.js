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
    title: 'Info',
    content: 'Some text 2',
  },
  {
    title: 'Contacts',
    content: 'Some text 3',
  },
];

const App = () => (
  <div className="container">
    <Tabs tabs={tabs} />
  </div>
);

export default App;
