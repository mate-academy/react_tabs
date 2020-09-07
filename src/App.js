import React from 'react';
import './App.css';

import { Tabs } from './components/Tabs';

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

  onTabSelected = (index) => {
    this.setState({ index });
  };

  render() {
    return (
      <div className="App">
        <Tabs
          tabs={tabs}
          index={this.state.index}
          onSelected={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
