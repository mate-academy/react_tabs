import React from 'react';
import { Tabs } from './components/Tabs';

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

  chooseSelectedTab = (tab: Tab) => {
    if (this.state.selectedTab.id !== tab.id) {
      this.setState({
        selectedTab: tabs.find(item => item.id === tab.id),
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
