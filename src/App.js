import React from 'react';

import './App.scss';

import { Tabs } from './components/Tabs/Tabs';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    selectedTab: tabs[0],
  }

  onTabSelect = (tab) => {
    if (tab === this.state.selectedTab) {
      return;
    }

    this.setState({
      selectedTab: tab,
    });
  }

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is
          {selectedTab.title}
        </h1>
        <Tabs
          tabs={tabs}
          onTabSelect={this.onTabSelect}
          selectedTab={selectedTab.id}
        />
      </div>
    );
  }
}

export default App;
