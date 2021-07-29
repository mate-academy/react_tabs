import React, { Component } from 'react';
import { Tab } from './components/Tab';

import './App.scss';

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

  onTabSelected = (selectedTab) => {
    this.setState({
      selectedTab,
    });
  }

  render() {
    const { selectedTab } = this.state;
    const { onTabSelected } = this;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {selectedTab.title}
        </h1>
        <Tab
          tabs={tabs}
          selectedTabId={selectedTab.id}
          onTabSelected={onTabSelected}
        />
      </div>
    );
  }
}

export default App;
