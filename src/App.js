import React from 'react';
import './App.css';

import { Tabs } from './components/Tabs';

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
  <div className="p-5">
    <h1 className="display-4 text-uppercase">React tabs</h1>

    <div className="row">
      <div className="col-5">
        <Tabs tabs={preparedTabs} />
      </div>
    </div>
  </div>
);

export default App;
