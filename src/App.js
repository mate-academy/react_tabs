import React from 'react';
import uuidv4 from 'uuid/v4';
import { Tabs } from './components/Tabs/Tabs';

const dataFromServer = [
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

const tabs = dataFromServer.map(tab => ({
  ...tab,
  id: uuidv4(),
}));

const App = () => (
  <Tabs tabs={tabs} />
);

export default App;
