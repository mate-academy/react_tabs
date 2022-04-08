import React from 'react';

import './App.scss';
import { Tabs } from './components/Tabs';
import { ChangeTabSelected } from './types/ChangeTabSelected';

type State = {
  selectedTab: Tab;
};

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

class App extends React.Component<{}, State> {
  state = {
    selectedTab: tabs[0],
  };

  changeTabSelected: ChangeTabSelected = (id) => {
    const currectTab = tabs.find(tab => tab.id === id);

    if (currectTab) {
      this.setState({ selectedTab: currectTab });
    }
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="app">
        <h1>{`Selected tab ${selectedTab.title}`}</h1>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTab.id}
          onTabSelected={this.changeTabSelected}
        />
      </div>
    );
  }
}

export default App;
