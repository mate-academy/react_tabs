import React from 'react';
import { Tabs } from './Component/Tabs/Tabs';
import { Tab } from './Component/Tab/Tab';
import './App.css';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Tab 1',
    content: 'Some text 1111111111',
  },
  {
    title: 'Tab 2',
    content: 'Some text 2222222222',
  },
  {
    title: 'Tab 3',
    content: 'Some text 3333333333',
  },
];

const App = () => (
  <Tabs>
    <Tab title="Tab 2">
      It could be a text
    </Tab>

    <Tab title="Tab 3">
      <div>1</div>
      <div>2</div>
    </Tab>

    <Tab title="Tab 1">
      Or even any JSX
    </Tab>
  </Tabs>
);

export default App;
