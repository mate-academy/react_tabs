import React from 'react';
import './App.css';
import Tabs from './Tabs';

const App = () => {
  const tabs = [
    { title: 'Tab 1', content: 'Some text 1' },
    { title: 'Tab 2', content: 'Some text 2' },
    { title: 'Tab 3', content: 'Some text 3' },
  ];

  return (
    <div className="App">
      <Tabs tabsArr={tabs} />
    </div>
  );
};

export default App;
