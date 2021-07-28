import React from 'react';

import { Tabs } from './components/Tabs/Tabs';

import './App.scss';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

export class App extends React.Component {
  state = {
    selectedTab: tabs[0],
  }

  selectTab = (selectedTab) => {
    this.setState({
      selectedTab,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>
          {`Selected tab is ${this.state.selectedTab.title}`}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTabId={this.state.selectedTab.id}
          onTabSelected={this.selectTab}
        />
      </div>
    );
  }
}
