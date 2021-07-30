import React, { Component } from 'react';

import './App.scss';
import { Tabs } from './components/Tabs';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

export class App extends Component {
  state = {
    selectedTab: tabs[0],
  }

  onTabSelected = (choosedTab) => {
    const { selectedTab } = this.state;

    if (choosedTab.id !== selectedTab.id) {
      this.setState({ selectedTab: choosedTab });
    }
  }

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1 className="text">{`Selected tab is ${selectedTab.title}`}</h1>
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          onTabSelected={this.onTabSelected}
        />
      </div>
    );
  }
}
