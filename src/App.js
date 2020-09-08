import React from 'react';
import './App.css';
import { Tabs } from './components/Tabs/Tabs';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Tab 1',
    content: 'Lorem sed do eiusmod ut labore et dolore magna aliqua.',
  },
  {
    title: 'Tab 2',
    content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
  },
  {
    title: 'Tab 3',
    content: 'Sed ut perspiciatis unde omnis error sit voluptatem accusantium.',
  },
];

const App = () => (
  <Tabs tabs={tabs} />
);

export default App;
