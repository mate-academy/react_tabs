import React from 'react';
import './App.css';

import { Tabs } from './components/Tabs/Tabs';

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

  onTabSelected = (inputIndex) => {
    this.setState({
      index: inputIndex,
    });
  }

  render() {
    const { index } = this.state;

    return (
      <div>
        <h1>React tabs</h1>
        <Tabs
          tabs={tabs}
          getSelect={this.onTabSelected}
          index={index}
        />
        <p>{tabs[index].content}</p>
      </div>
    );
  }
}

export default App;
