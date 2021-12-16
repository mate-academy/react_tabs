import React from 'react';

import './App.scss';
import { Tabs } from './components/Tabs/Tabs';
import { Tab } from './react-app-env';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface State {
  selectedTab: Tab;
}

export class App extends React.Component<{}, State> {
  state = {
    selectedTab: tabs[0],
  };

  findTab = (choosenTab: Tab) => {
    return tabs.find(tab => tab.id === choosenTab.id);
  };

  onTabSelected = (choosenTab: Tab) => {
    if (choosenTab.id === this.state.selectedTab.id) {
      return;
    }

    this.setState((prevState) => {
      return {
        selectedTab: this.findTab(choosenTab) || prevState.selectedTab,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>{`Selected tab is ${this.state.selectedTab.title}`}</h1>
        <Tabs
          tabs={tabs}
          selectedTabId={this.state.selectedTab.id}
          onSelect={this.onTabSelected}
        />
      </div>
    );
  }
}
