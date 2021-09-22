import React from 'react';

import './App.scss';
import { Tabs } from './components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Home', content: 'Some text 1' },
  { id: 'tab-2', title: 'Profile', content: 'Some text 2' },
  { id: 'tab-3', title: 'Contact', content: 'Some text 3' },
];

type State = {
  selectedTab: Tab,
};

export class App extends React.Component<{}, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  onTabSelected = (currentTab: Tab) => {
    if (currentTab.id === this.state.selectedTab.id) {
      return;
    }

    this.setState({ selectedTab: currentTab });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {selectedTab.title}
        </h1>

        <Tabs
          onTabSelected={this.onTabSelected}
          tabs={tabs}
          selectedTab={selectedTab}
        />
      </div>
    );
  }
}
