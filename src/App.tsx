import React from 'react';
import { Tabs } from './component/Tab/Tab';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTab: Tab;
};

class App extends React.Component<{}, State> {
  state = {
    selectedTab: tabs[0],
  };

  onTabSelected = (tab: Tab) => {
    this.setState({ selectedTab: tab });
  };

  render() {
    return (
      <div className="App">
        <h1 className="add_title">{`Selected tab is: ${this.state.selectedTab.title}`}</h1>
        <Tabs
          tabs={tabs}
          selectedTab={this.state.selectedTab}
          onTabSelected={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
