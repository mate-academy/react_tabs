import React, { PureComponent } from 'react';
import './App.css';
import Tabs from './components/Tabs/Tabs';
import './App.scss';

const tabs = [
  {
    id: 0,
    title: 'Tab 1',
    content: 'Some text 1',
  },
  {
    id: 1,
    title: 'Tab 2',
    content: 'Some text 2',
  },
  {
    id: 2,
    title: 'Tab 3',
    content: 'Some text 3',
  },
];

class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <h1>
          React tabs
        </h1>
        <Tabs tabs={tabs} />
      </div>
    );
  }
}

export default App;
