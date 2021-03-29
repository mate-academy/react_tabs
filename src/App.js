import React, { Component } from 'react';
import { Tabs } from './components/Tabs';

import './App.css';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Home', content: 'Some text 1' },
  { id: 'tab-2', title: 'Profile', content: 'Some text 2' },
  { id: 'tab-3', title: 'Contact', content: 'Some text 3' },
];
/* eslint-enable */

class App extends Component {
  state = {
    selectedTab: tabs[0],
  }

  selectedTab = (tab) => {
    this.setState({
      selectedTab: tab,
    });
  }

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {selectedTab.id}
        </h1>
        <Tabs
          tabs={tabs}
          onTabSelected={this.selectedTab}
          selectedTab={selectedTab}
        />
      </div>
    );
  }
}

export default App;
