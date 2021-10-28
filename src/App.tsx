import React from 'react';

import './App.scss';
import { TabList } from './Tablist';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Tab = {
  id: string;
  title: string;
  content: string;
};

type AppState = {
  selectedTab: Tab;
};

class App extends React.Component<{}, AppState> {
  state: AppState = {
    selectedTab: tabs[0],
  };

  onTabSelected = (tab: Tab) => {
    this.setState({ selectedTab: tab });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is
          {' '}
          {selectedTab.title}
        </h1>
        <TabList
          tabs={[...tabs]}
          onTabSelected={this.onTabSelected}
          selectedTab={selectedTab}
        />
        <div>
          {selectedTab.content}
        </div>
      </div>
    );
  }
}

export default App;
