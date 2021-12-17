import React from 'react';

import './App.scss';
import { Tab } from './Tab';
import { Tabs } from './Tabs/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTab: Tab,
};

class App extends React.Component<{}, State> {
  state:State = {
    selectedTab: tabs[0],
  };

  selectNewTab = (tab:Tab) => {
    this.setState({ selectedTab: tab });
  };

  render() {
    return (
      <div className="App">
        <h1>
          {`Selected tab is ${this.state.selectedTab.title}`}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTabId={this.state.selectedTab.id}
          onTabSelected={this.selectNewTab}
        />
        <div>{tabs.length}</div>
      </div>
    );
  }
}
export default App;
