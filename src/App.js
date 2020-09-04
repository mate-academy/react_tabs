import React from 'react';
import './App.css';
import { Tabs } from './Tabs';

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

const preparedTabs = tabs.map((tab, index) => ({
  ...tab, id: index,
}));

const App = () => {
  const onTabChange = (title) => {
    const p = document.querySelector('p');
    const clickedTab = preparedTabs.find(tab => tab.title === title);

    p.textContent = clickedTab.content;
  };

  return (
    <div className="App">
      <Tabs tabs={preparedTabs} onTabSelected={onTabChange} />
      <p>{preparedTabs[0].content}</p>
    </div>
  );
};

export default App;
