import React from 'react';
import Tabs from './components/Tabs';
import './App.css';

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

const App = () => (
  <>
    <h1>React tabs</h1>
    <Tabs>
      {tabs.map(tab => (
        <div label={tab.title}>
          {tab.content}
        </div>
      ))}
    </Tabs>
  </>
);

export default App;
