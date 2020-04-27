import React, { Component } from 'react';
import './App.css';
import { Tabs } from './Tabs/Tabs';

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
    indexTabs: 0,
  }

  changeTab = index => this.setState({
    indexTabs: index,
  })

  render() {
    return (
      <>
        <h1>React tabs</h1>
        <Tabs tabs={tabs} changeTab={this.changeTab} />
        <p>{tabs[this.state.indexTabs].content}</p>
      </>
    );
  }
}

export default App;
