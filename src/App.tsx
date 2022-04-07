import React from 'react';

import './App.scss';
import { Tabs } from './components/Tabs';
import { tabs } from './api/loadData';

const tabsFromServer = [...tabs];

type State = {
  selectedTab: Tab,
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedTab: tabsFromServer[0],
  };

  onTabSelected = (tab: Tab) => {
    this.setState({
      selectedTab: tab,
    });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1 className="title">
          Selected tab is
          {' '}
          {selectedTab.title}
        </h1>

        <Tabs
          tabs={tabsFromServer}
          selectedTab={selectedTab}
          onTabSelected={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
