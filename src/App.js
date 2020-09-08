import React from 'react';
import './App.css';
import { Tabs } from './components/Tabs';
import { Tab } from './components/Tab';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    tabId: 0,
    title: 'Tab 1',
    content: 'Some text 1',
  },
  {
    tabId: 1,
    title: 'Tab 2',
    content: 'Some text 2',
  },
  {
    tabId: 2,
    title: 'Tab 3',
    content: 'Some text 3',
  },
];

const App = () => (
  <>
    <h1>React tabs</h1>

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
  </>
);

export default App;
