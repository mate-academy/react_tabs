import React from 'react';
import './App.scss';
import { Tabs } from './components/Tabs';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    workingTabs: tabs,
    selectedTab: tabs[0],
  }

  onTabSelected = (idToSelect) => {
    if (idToSelect === this.state.selectedTab.id) {
      return;
    }

    this.setState(state => ({
      selectedTab: state.workingTabs.find(
        tab => tab.id === idToSelect,
      ),
    }));
  }

  render() {
    const { workingTabs, selectedTab } = this.state;

    return (
      <div className="App">
        <h1>{`Selected tab is ${selectedTab.title}`}</h1>
        <Tabs
          selectedTabId={selectedTab.id}
          onSelect={this.onTabSelected}
          tabs={workingTabs}
        />
      </div>
    );
  }
}

export default App;
