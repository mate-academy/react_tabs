import React from 'react';
import './App.css';
import { Tabs } from './components/Tabs/index';

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

export class App extends React.Component {
  state = {
    tabs: tabsFromServer.map((tab, index) => ({
      ...tab,
      index,
    })),
    index: 0,
  };

  onTabSelected = (index) => {
    this.setState({
      index,
    });
  }

  render() {
    const { tabs, index } = this.state;

    return (
      <div className="App">
        <h1>React tabs</h1>
        <Tabs
          tabs={tabs}
          tabIndex={index}
          handleTabSelect={this.onTabSelected}
        />
      </div>
    );
  }
}
