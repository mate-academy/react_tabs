import React from 'react';
import Tabs from './Tabs';

import './App.css';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    tabSelected: tabs[0],
    selectedTab: 'Tab 1',
  }

  onTabSelected = (id) => {
    if (this.state.tabSelected.id === id) {
      return;
    }

    this.setState({
      tabSelected: tabs.find(
        tab => tab.id === id,
      ),

      selectedTab: tabs.find(
        tab => tab.id === id,
      ).title,
    });
  }

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {selectedTab}
        </h1>

        <Tabs
          tabs={tabs}
          onTabSelected={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
