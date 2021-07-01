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
    selectedTabId: 'tab-1',
  };

  selectedTab = (tabId) => {
    this.setState({ selectedTabId: tabId });
  }

  render() {
    const { selectedTabId } = this.state;
    const choosedTab = tabs.find(tab => tab.id === selectedTabId);

    return (
      <div className="App">
        <h1>{`Selected tab is ${choosedTab.title}`}</h1>

        <Tabs
          tabs={tabs}
          content={choosedTab.content}
          onTabSelected={this.selectedTab}
        />
      </div>
    );
  }
}
