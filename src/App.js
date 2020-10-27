import React from 'react';
import './App.css';

import Tabs from './components/Tabs/Tabs';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Tab 1',
    // eslint-disable-next-line max-len
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dicta adipisci ipsum consectetur similique quia deleniti optio minima iste cum?',
  },
  {
    title: 'Tab 2',
    // eslint-disable-next-line max-len
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sequi placeat necessitatibus nemo. Sed accusantium nisi quaerat deleniti est quibusdam temporibus. Voluptatibus voluptatem aspernatur cumque recusandae cupiditate illo eius libero.',
  },
  {
    title: 'Tab 3',
    // eslint-disable-next-line max-len
    content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt totam distinctio explicabo esse iusto amet! Molestiae, consequatur! Enim adipisci, corrupti aut natus quidem quos quisquam! Voluptates.',
  },
];

const preparedTabs = tabs.map((tab, i) => ({
  ...tab,
  tabIndex: i + 1,
}));

const App = () => (
  <Tabs tabs={preparedTabs} />
);

export default App;
