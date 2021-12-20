import React from 'react';
import { Tabs } from './components/Tabs/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'FE_OCT21 is the best team ever' },
  { id: 'tab-2', title: 'Tab 2', content: 'Approve a task' },
  { id: 'tab-3', title: 'Tab 3', content: 'Do not reject a task' },
];

class App extends React.Component {
  state = {
    selectedTab: tabs[0],
  };

  chooseSelectedTab = (currentTab: Tab) => {
    if (this.state.selectedTab.id !== currentTab.id) {
      this.setState({
        selectedTab: currentTab,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">{`Selected tab is ${this.state.selectedTab.title}`}</h1>
        <Tabs
          tabs={tabs}
          tabId={this.state.selectedTab.id}
          chooseSelectedTab={this.chooseSelectedTab}
        />
      </div>
    );
  }
}

export default App;
