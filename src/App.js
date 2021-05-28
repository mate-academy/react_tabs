import React from 'react';
import { Tabs } from './component/Tabs';

import './App.css';

/* eslint-disable */
const tabsFromServer = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

const tabs = tabsFromServer.map(tab => ({ ...tab }));

export class App extends React.Component {
  state = {
    selectedApp: tabs[0],
  }

  tabSeleted = (tabId) => {
    const { selectedApp } = this.state;

    if (tabId === selectedApp.id) {
      return;
    }

    this.setState({
      selectedApp: tabs.find(tab => tabId === tab.id),
    });
  }

  render() {
    const { selectedApp } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {selectedApp.title}
        </h1>
        <Tabs
          tabs={tabs}
          selectedApp={selectedApp}
          onTabSelected={this.tabSeleted}
        />
      </div>
    );
  }
}
