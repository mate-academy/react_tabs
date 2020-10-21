import React from 'react';
import Tabs from './components/Tabs';
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

function App() {
  return (
    <div>
      <h1>Tabs Demo</h1>
      <Tabs>
        <div label={tabs[0].title}>
          {tabs[0].content}
        </div>
        <div label={tabs[1].title}>
          {tabs[1].content}
        </div>
        <div label={tabs[2].title}>
          {tabs[2].content}
        </div>
      </Tabs>
    </div>
  );
}

export default App;
