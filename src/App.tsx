import React from 'react';
import { tabs } from './api/data';

import './App.scss';
import { Tabs } from './components/Tabs';

type State = {
  selectedTab: Tab,
};

export class App extends React.Component<{}, State> {
  state = {
    selectedTab: tabs[0],
  };

  onTabSelected = (selectedTab: Tab) => {
    this.setState({
      selectedTab: selectedTab || tabs[0],
    });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>{`Selected tab is ${selectedTab.title}`}</h1>

        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          onTabSelected={this.onTabSelected}
        />

        <p>
          {selectedTab.content}
        </p>
      </div>
    );
  }
}
