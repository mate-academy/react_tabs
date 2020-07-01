/* eslint-disable max-len */
import React from 'react';
import './App.css';
import { Tabs } from './components/Tabs/Tabs';

const tabs = [
  {
    title: 'Home',
    content: 'Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.',
  },
  {
    title: 'Profile',
    content: 'Declarative views make your code more predictable and easier to debug.',
  },
  {
    title: 'Contact',
    content: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.',
  },
];

export const App = () => (
  <Tabs tabs={tabs} />
);

export default App;
