import React from 'react';
import './components/Tabs.scss';
import { Tabs } from './components/Tabs';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'HTML',
    content: 'Hyper-Text Markup Language is used to put '
      + 'the structure of a website together. '
      + '(Like a skeleton of a body)',
  },
  {
    title: 'CSS',
    content: 'Cascading Style Sheets acts like makeup for '
      + 'the HTML. CSS improves the colors and layout of a website '
      + 'structure built with HTML.',
  },
  {
    title: 'JavaScript',
    content: 'JavaScript is a full-on programming language '
      + 'that adds interactivity and functionality to a website.',
  },
];

export default function App() {
  const preparedTabs = tabs.map((tab, i) => ({
    ...tab,
    index: i,
  }));

  return (
    <>
      <h1>React tabs</h1>
      <Tabs tabs={preparedTabs} />
    </>
  );
}
