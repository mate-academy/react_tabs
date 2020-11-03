import React from 'react';
import './App.css';
import { Tabs } from './components/addTabs';

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

const preparedTabs = tabs.map((tab, index) => ({
  ...tab,
  index,
}));

const App = () => (
  <Tabs tabs={preparedTabs} index={0} />
);

export default App;
