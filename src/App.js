import React from 'react';
import './App.scss';
import Tabs from './Components/Tabs';
import Tab from './Components/Tab';

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

const App = () => (
  <>
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
