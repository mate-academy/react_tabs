import React from 'react';
import { Tabs } from './components/Tabs/TabsBox';
import 'bootswatch/dist/lux/bootstrap.min.css';
import './reset.css';
import './App.css';

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

export const App = () => (
  <section className="wrapper">
    <h1 className="title">My Tabs</h1>
    <Tabs tabs={tabs} />
  </section>
);
