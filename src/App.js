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

class App extends React.Component {
  state = {
    index: 0,
  };

  onTabSelected = (i) => {
    this.setState({ index: i });
  }

  render() {
    return (
      <>
        <h1>React tabs</h1>
        <Tabs
          tabs={tabs}
          onTabSelected={this.onTabSelected}
          index={this.state.index}
        />
      </>
    );
  }
}

export default App;
