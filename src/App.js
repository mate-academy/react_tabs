import React, { Component } from 'react';
import Tabs from './components/Tabs/Tabs';

import './App.css';

class App extends Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ],
  };

  render() {
    const { tabs } = this.state;

    return (
      <div className="App">
        <h1>{`${tabs.length} tabs`}</h1>
        <Tabs tabs={tabs} />
      </div>
    );
  }
}

export default App;
