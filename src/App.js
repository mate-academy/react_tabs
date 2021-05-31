import React from 'react';
import { Tabs } from './Tabs';

import './App.scss';

/* eslint-disable */
const tabsFromServer = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    selectedTab: tabsFromServer.find(tab => tab.id),
  }

  selectTab = (tabId) => {
    if (this.state.selectedTab.id === tabId) {
      return;
    }

    this.setState({
      selectedTab: tabsFromServer.find(tab => tab.id === tabId),
    });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <Tabs
          tabs={tabsFromServer}
          selectedTab={selectedTab}
          onTabSelected={this.selectTab}
        />
      </div>
    );
  }
}

export default App;
