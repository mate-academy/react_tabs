import React from 'react';
import './App.css';
import { Tabs } from './components/Tabs';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Home',
    content: 'Some text 1',
  },
  {
    title: 'Rrofile',
    content: 'Some text 2',
  },
  {
    title: 'Contact',
    content: 'Some text 3',
  },
];

class App extends React.Component {
  state = {
    index: 0,
  }

  onTabSelected = (i) => {
    this.setState({ index: i });
  }

  render() {
    const { index } = this.state;

    return (
      <>
        <h1>React tabs</h1>
        <Tabs
          tabs={tabs}
          onChange={this.onTabSelected}
          index={index}
        />
      </>
    );
  }
}

export default App;
