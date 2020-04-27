import React from 'react';
import './App.css';
import Tabs from './Tabs';

// eslint-disable-next-line no-unused-vars
/* eslint-disable max-len */
const tabs = [
  {
    id: 0,
    title: 'HTML',
    content: 'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.',
  },
  {
    id: 1,
    title: 'JS',
    content: 'JavaScript  often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.[7] JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.',
  },
  {
    id: 2,
    title: 'REACT',
    content: 'React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.',
  },
];

const App = () => (
  <div>
    <h1>React tabs</h1>
    <Tabs tabs={tabs} />
  </div>

);

export default App;
