import React from 'react';
import { Tabs } from './components/Tabs/Tabs';
import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Home', content: 'Some text 1' },
  { id: 'tab-2', title: 'Profile', content: 'Some text 2' },
  { id: 'tab-3', title: 'Contact', content: 'Some text 3' },
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
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>
          {`Selected tab is ${selectedTab.title}`}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTab.id}
          onTabSelected={this.onTabSelected}
        />
        <div>
          {selectedTab.content}
        </div>
      </div>
    );
  }
}

export default App;
