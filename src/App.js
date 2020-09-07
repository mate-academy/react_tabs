import React from 'react';
import Tabs from './components/Tabs';
import './App.css';

// eslint-disable-next-line no-unused-vars
const tabsFromServer = [
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
    tabs: tabsFromServer.map((tab, index) => ({
      ...tab,
      index,
    })),
    index: 0,
  };

  changeIndex = (index) => {
    this.setState({ index });
  }

  render() {
    const { tabs, index } = this.state;

    return (
      <Tabs tabs={tabs} index={index} changeIndex={this.changeIndex} />
    );
  }
}

export default App;
