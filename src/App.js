import React from 'react';
import { Tabs } from './components/Tabs/Tabs';
import './App.css';

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

const preparedTabs = tabs.map((tab, tabIndex) => ({
  ...tab,
  index: tabIndex,
}));

const App = () => (
  <div className="app">
    <Tabs tabs={preparedTabs} index={0} />
  </div>
);

export default App;
