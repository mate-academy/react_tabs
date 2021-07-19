import React from 'react';
import { Tabs } from './components/Tabs/Tabs';

import './App.scss';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    selectedTab: tabs[0],
    selectedTabId: 'tab-1',
    tabs,
  };

  onTabSelected = (tab) => {
    this.setState({
      selectedTabId: tab.id,
      selectedTab: tab,
    });
  }

  render() {
    return (
      <>
        <h1>
          Selected tab is
          {' '}
          {this.state.selectedTab.title}
        </h1>
        <Tabs
          tabs={this.state.tabs}
          selectedTabId={this.state.selectedTabId}
          onTabSelected={this.onTabSelected}
        />
      </>
    );
  }
}

export default App;
