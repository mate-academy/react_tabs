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

class App extends Component {
  state = {
    selectedTab: tabs[0],
  }

  onChangeTab = (newSelectedTab) => {
    if (newSelectedTab.id === this.state.selectedTab.id) {
      return;
    }

    this.setState({ selectedTab: newSelectedTab });
  };

  render() {
    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {this.state.selectedTab.title}
        </h1>
        <Tabs
          tabs={tabs}
          onChangeTab={this.onChangeTab}
          selectedTab={this.state.selectedTab}
        />
      </div>
    );
  }
}
export default App;
