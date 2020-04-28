import React from 'react';
import './App.css';
import Tabs from './components/Tabs';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Tab 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
  },
  {
    title: 'Tab 2',
    content: `Harum vero consectetur fugiat
    fugit provident temporibus quos eveniet!`,
  },
  {
    title: 'Tab 3',
    content: `Incidunt aut blanditiis excepturi tempora expedita
    consectetur placeat eum quas, vero at enim.`,
  },
];

const App = () => (
  <section className="app">
    <Tabs tabs={tabs} />
  </section>
);

export default App;
