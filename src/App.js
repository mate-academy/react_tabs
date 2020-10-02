import React from 'react';
import './App.css';
import Tabs from './Tabs';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Tab 1',
    content: 'Some text 1',
    id: 0,
  },
  {
    title: 'Tab 2',
    content: 'Some text 2',
    id: 1,
  },
  {
    title: 'Tab 3',
    content: 'Some text 3',
    id: 2,
  },
];

class App extends React.Component {
  state = {
    index: 0,
  };

  changeIndex = index => (
    this.setState({ index })
  );

  render() {
    return (
      <>
        <h1>React tabs</h1>
        <Tabs
          tabs={tabs}
          index={this.state.index}
          callback={this.changeIndex}
        />
      </>
    );
  }
}

export default App;
