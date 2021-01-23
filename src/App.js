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
  }

  onTabSelected = (index) => {
    this.setState({ index });
  }

  render() {
    const { index } = this.state;

    return (
      <main className="content">
        <h1>React tabs</h1>
        <Tabs
          tabs={tabs}
          index={index}
          onTabSelected={this.onTabSelected}
        />
        <p>
          {tabs[index].content}
        </p>
      </main>
    );
  }
}

export default App;
