import React from 'react';

import './App.scss';
import Tabs from './Tabs';

/* eslint-disable */
const tabs = [
  { id: "tab-1", title: "Tab 1", content: "Some text 1" },
  { id: "tab-2", title: "Tab 2", content: "Some text 2" },
  { id: "tab-3", title: "Tab 3", content: "Some text 3" },
];
/* eslint-enable */

export class App extends React.Component {
  state = {
    selectedTab: tabs[0],
  };

  handlerTabSelector = (tabId) => {
    if (tabId === this.state.selectedTab.id) {
      return;
    }

    this.setState({
      selectedTab: tabs.find(tab => tabId === tab.id),
    });
  };

  render() {
    return (
      <div className="App">
        <h1>{`Selected tab is ${this.state.selectedTab.title}`}</h1>
        <Tabs
          tabs={tabs}
          onTabSelected={this.handlerTabSelector}
          selectedTab={this.state.selectedTab.id}
        />
      </div>
    );
  }
}
