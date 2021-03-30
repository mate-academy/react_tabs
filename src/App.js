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
    selectedTabId: 'tab-1',
  }

  onTabSelect = (tab) => {
    this.setState({
      selectedTabId: tab.id,
    });
  }

  render() {
    const selectedTab = tabs.find(tab => tab.id === this.state.selectedTabId);

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {selectedTab.title}
        </h1>
        <Tabs
          tabs={tabs}
          onTabSelect={this.onTabSelect}
          selectedTabId={this.state.selectedTabId}
        />
        <p>
          {selectedTab.content}
        </p>
      </div>
    );
  }
}

export default App;
