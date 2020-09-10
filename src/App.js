import React from 'react';
import './App.css';
import { Tabs } from './components/Tabs/Tabs';

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
    tabs: tabs.map((tab, index) => ({
      ...tab,
      id: index,
    })),
    currentTab: 0,
  }

  onTabSelected = (currentTab) => {
    this.setState({ currentTab });
  }

  render() {
    return (
      <>
        <h1>React tabs</h1>
        <Tabs
          tabs={this.state.tabs}
          currentTab={this.state.currentTab}
          onSelected={this.onTabSelected}
        />
      </>
    );
  }
}
