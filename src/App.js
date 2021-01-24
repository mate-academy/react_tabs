import React from 'react';
import { TabsList } from './TabsList';
import './App.css';

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

const App = () => (
  <>
    <h1>React tabs</h1>
    <TabsList tabs={tabs} />
  </>
);

export default App;
