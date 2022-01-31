import React from 'react';

import './App.scss';
import { Tabs } from './components/Tabs';

const serverTabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

class App extends React.Component {
  state = {
    selectedTab: serverTabs[0],
    tabs: serverTabs,
  };

  handleTabChange = (tab: Tab) => {
    if (this.state.selectedTab !== tab) {
      this.setState({ selectedTab: tab });
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">{`Selected tab is ${this.state.selectedTab.title}`}</h1>

        <Tabs
          tabs={this.state.tabs}
          selectedTabId={this.state.selectedTab.id}
          onTabSelected={this.handleTabChange}
        />
      </div>
    );
  }
}

export default App;
