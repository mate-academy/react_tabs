import React from 'react';
import './App.css';

import Tabs from './components/Tabs';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Tab 1',
    content: 'React is difficult',
  },
  {
    title: 'Tab 2',
    content: 'React is unbelievable hard',
  },
  {
    title: 'Tab 3',
    content: 'But im trying to do my best',
  },
  {
    title: 'Tab 4',
    content: 'Thank you for your attention =)',
  },
];

const App = () => (
  <>
    <h1>React tabs</h1>
    <Tabs tabs={tabs} />
  </>
);

export default App;
