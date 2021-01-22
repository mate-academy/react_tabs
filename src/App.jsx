import React from 'react';
import './App.css';
import { Tabs } from './components/Tabs';

const tabs = [
  {
    title: 'HTML/CSS',
    content: 'DONE 100%',
  },
  {
    title: 'Javascript',
    content: 'DONE 90%',
  },
  {
    title: 'React',
    content: 'DONE 70%',
  },
];

const App = () => (
  <div className="app">
    <h1 className="app__title">Statistics of passed topics</h1>

    <Tabs tabs={tabs} index={0} />
  </div>
);

export default App;
