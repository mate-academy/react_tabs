import React from 'react';
import './App.css';
import Main from "./components/Main/Main";

function App() {
  let tabs = [
    {title: 'Tab 1', content: 'Some text 1'},
    {title: 'Tab 2', content: 'Some text 2'},
    {title: 'Tab 3', content: 'Some text 3'},
  ];
  return <Main tabs={tabs} />
}

export default App;
