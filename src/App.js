import React, { Component } from 'react';
import { Tabs } from './components/Tabs';

import './App.css';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends Component {
  state = {
    selectedTab: tabs[0],
  }

  onTabSelected = (tabID) => {
    this.setState({
      selectedTab: tabs[tabs.findIndex(tab => tab.id === tabID)],
    });
  }

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>{`Selected tab is ${selectedTab.title}`}</h1>
        <Tabs
          tabs={tabs}
          tabID={selectedTab.id}
          onTabSelected={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
