import React from 'react';
import { Tabs } from './components/Tabs';
import './App.css';

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

export class App extends React.Component {
  state = {
    titleToPrint: 0,
  }

  onTabSelected = (i) => {
    this.setState({
      titleToPrint: i,
    });
  }

  render() {
    return (
      <>
        <h1 className="head-title">React tabs:</h1>
        <Tabs
          tabs={tabs}
          onTabSelected={this.onTabSelected}
          titleToPrint={this.state.titleToPrint}
        />
      </>
    );
  }
}
