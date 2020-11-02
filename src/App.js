import React from 'react';
import './App.css';

import { Tabs } from './components/Tabs/Tabs';
import 'semantic-ui-css/semantic.min.css';

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

const preparedData = tabs.map((tab, index) => ({
  ...tab,
  index,
}));

const App = () => (
  <div className="container">
    <h1 className="title">React tabs</h1>

    <Tabs
      tabs={preparedData}
      index={0}
    />
  </div>
);

export default App;
