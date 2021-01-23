import React from 'react';
import './App.css';
import { Tabs } from './components/Tabs';

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

const tabsWithId = tabs.map(tab => ({
  ...tab, id: tabs.indexOf(tab),
}));

const App = () => (
  <div>
    <h1 className="header">React tabs</h1>

    <Tabs
      tabs={tabsWithId}
      index={0}
    />
  </div>

);

export default App;
