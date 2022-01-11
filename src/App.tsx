import React from 'react';
import { Tabs } from './Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTab: string,
};

class App extends React.Component<{}, State> {
  state = {
    selectedTab: tabs[0].id,
  };

  onTabSelected = (newSelTab: string, prevSelTab: string) => {
    if (newSelTab !== prevSelTab) {
      this.setState({ selectedTab: newSelTab });
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className="App-title">{`Selected tab is ${this.state.selectedTab}`}</h1>
        <Tabs
          propTabs={tabs}
          selectedTabId={this.state.selectedTab}
          onSelected={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
