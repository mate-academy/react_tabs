import React from 'react';

import './App.scss';
import { Tabs } from './Tabs';

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
  };

  onTabSelected = (tab) => {
    this.setState({ selectedTab: tab });
  }

  render() {
    const { selectedTab } = this.state;

    return (
      <div>
        <h1>
          Selected tab is&nbsp;
          {selectedTab.title}
        </h1>
        <Tabs
          tabs={tabs}
          onTabSelected={this.onTabSelected}
          selectedTabId={selectedTab.id}
        />
      </div>
    );
  }
}

export default App;
