import React from 'react';
import { Tabs } from './components/Tabs';

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
  }

  onTabSelected = (selectedTab) => {
    this.setState({ selectedTab });
  }

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App box">
        <h1 className="title">
          Selected tab is&nbsp;
          {selectedTab.title}
        </h1>
        <Tabs
          tabsList={tabs}
          selectedTabId={selectedTab.id}
          onTabSelected={this.onTabSelected}
        />
        <p className="title is-4 has-text-danger">
          {selectedTab.content}
        </p>
      </div>
    );
  }
}

export default App;
