import React from 'react';
import { Tabs } from './Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

class App extends React.Component {
  state = {
    selectedTab: tabs[0],
  };

  chooseSelectedTab = (tabId: string) => {
    if (this.state.selectedTab.id !== tabId) {
      this.setState({
        selectedTab: tabs.find(item => item.id === tabId),
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>{`Selected tab is ${this.state.selectedTab.title}`}</h1>
        <Tabs
          tabs={tabs}
          selectedTabId={this.state.selectedTab.id}
          chooseSelectedTab={this.chooseSelectedTab}
        />
      </div>
    );
  }
}

export default App;
