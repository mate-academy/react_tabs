import React from 'react';
import { Tabs } from './components/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  id: index,
}));

const App = () => (
  <div className="container container-fluid p-5">
    <h1 className="text-center">React tabs</h1>
    <Tabs tabs={preparedTabs} />
  </div>
);

export default App;
