import React from 'react';

import './App.scss';
import { Tabs } from './Component/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTab: Tab;
};

type Props = {};

class App extends React.Component <Props, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  changeTab = (tab:Tab) => {
    this.setState({ selectedTab: tab });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {selectedTab.title}
        </h1>
        <div>{tabs.length}</div>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTab.id}
          onTabSelected={this.changeTab}
        />
      </div>
    );
  }
}

export default App;
