import React from 'react';
import { tabs } from './api/data';

import './App.scss';
import { Tabs } from './components/Tabs';

type State = {
  selectedTab: string,
};

export class App extends React.Component<{}, State> {
  state = {
    selectedTab: 'tab-1',
  };

  onTabSelected = (selectedTab: Tab) => {
    this.setState({
      selectedTab: tabs.find(
        tab => tab.id === selectedTab.id,
      )?.id || 'tab-1',
    });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>{`Selected tab is ${tabs.find(tab => selectedTab === tab.id)?.title}`}</h1>

        <Tabs
          tabs={tabs}
          onTabSelected={this.onTabSelected}
        />

        <p>
          {tabs.find(tab => selectedTab === tab.id)?.content}
        </p>
      </div>
    );
  }
}
