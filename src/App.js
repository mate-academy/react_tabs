import React from 'react';
import './App.css';
import Tabs from './components/Tabs/Tabs';

const App = () => {
  const tabs = [
    { title: 'Tab 1', content: 'Some text 1' },
    { title: 'Tab 2', content: 'Some text 2' },
    { title: 'Tab 3', content: 'Some text 3' },
  ];

  return (
    <>
      <div className="App">
        <h1>{`${tabs.length} tabs`}</h1>
      </div>
      <Tabs tabs={tabs} />
    </>
  );
};

export default App;
