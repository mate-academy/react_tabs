import React from 'react';
import './App.scss';
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
  {
    title: 'Tab 4',
    content: 'Some text 4',
  },
];

class App extends React.Component {
  state = {
    indexOfActive: 0,
  }

  togglerHandler = (index) => {
    this.setState({
      indexOfActive: index,
    });
  }

  render() {
    return (
      <>
        <h1>React tabs</h1>
        <Tabs
          tabs={tabs}
          togglerHandler={this.togglerHandler}
          indexOfActive={this.state.indexOfActive}
        />
      </>
    );
  }
}

export default App;
