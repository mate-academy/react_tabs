import React, { Component } from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

export class App extends Component {
  state = {
    selectedTab: tabs[0].id,
  }

  onClickTab = (id) => {
    this.setState({
      selectedTab: id,
    });
  }

  render() {
    const { onClickTab } = this;
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {tabs.find(
            tab => tab.id === selectedTab,
          ).title}
        </h1>
        <Tabs
          tabs={tabs}
          onClickTab={onClickTab}
          selectedTab={selectedTab}
        />
      </div>
    );
  }
}
