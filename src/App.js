import React from 'react';
import './App.scss';
import uuidv4 from 'uuid/v4';
import { Tabs } from './components/Tabs';

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

const prepTabs = tabs.map(item => ({
  ...item,
  id: uuidv4(),
}));

const App = () => (
  <Tabs tabs={prepTabs} />
);

export default App;
