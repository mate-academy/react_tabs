import React from 'react';
import { Tabs } from './Tabs';
import './App.scss';

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

const preparedTabs = tabs.map((tab, i) => ({
  ...tab,
  index: i,
}));

const App = () => (
  <div className="App">
    <h1 className="App__title">React tabs</h1>

    <Tabs tabs={preparedTabs} />
  </div>
);

export default App;
