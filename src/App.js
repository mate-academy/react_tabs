import React, { Component } from 'react';
import './App.css';

import { Tabs } from './components/Tabs/Tabs';

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

class App extends Component {
  state = {
    index: 0,
  };

  onTabSelected = (event, index) => {
    event.preventDefault();

    this.setState({ index });
  }

  render() {
    const { index } = this.state;

    return (
      <>
        <h1>React tabs</h1>

        <Tabs
          onSelected={this.onTabSelected}
          tabs={tabs}
          index={index}
        />
      </>
    );
  }
}

export default App;
