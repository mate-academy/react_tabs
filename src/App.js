import React from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

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

  onTabSelected = (newSelectedTab) => {
    if (newSelectedTab.id === this.state.selectedTab.id) {
      return;
    }

    this.setState({ selectedTab: newSelectedTab });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="app">
        <h1>
          Selected tab is&nbsp;
          {selectedTab && selectedTab.title}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          onTabSelected={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
