import React from 'react';

import './App.scss';
import { Tabs } from './components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTab: Tab;
};

class App extends React.PureComponent<{}, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  handleTabSelect = (tab: Tab) => {
    if (tab.id === this.state.selectedTab.id) {
      return 0;
    }

    return this.setState({
      selectedTab: tab,
    });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {selectedTab.id}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          onTabSelected={this.handleTabSelect}
        />
      </div>
    );
  }
}

export default App;
