import React from 'react';

import { Tab } from './Tab';
import { Tabs } from './Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface State {
  selectedTab: Tab,
}

export class App extends React.Component<{}, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  selectedTab = (currentTab: Tab) => {
    this.setState({ selectedTab: currentTab });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>{`Selected tab is ${selectedTab.title}`}</h1>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTab.id}
          selectTab={this.selectedTab}
        />
      </div>
    );
  }
}
