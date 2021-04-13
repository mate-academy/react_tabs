import React from 'react';

import { Tabs } from './components/Tabs';

import './App.scss';

/* eslint-disable */
const tabsFromServer = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

export class App extends React.Component {
  state = {
    selectedTab: tabsFromServer[0],
  }

  tabOnChanged = (tab) => {
    this.setState({
      selectedTab: tab,
    });
  }

  render() {
    const { selectedTab } = this.state;

    return (
      <div
        className="App"
      >
        <h1>
          Selected tab is &nbsp;
          {selectedTab.title}
        </h1>
        <Tabs
          tabsFromServer={tabsFromServer}
          selectedTabId={selectedTab.id}
          tabOnChanged={this.tabOnChanged}
        />
      </div>
    );
  }
}

export default App;
