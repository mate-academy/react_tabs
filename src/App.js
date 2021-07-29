import React from 'react';
import { Tabs } from './components/Tabs';

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
    selectedTab: 'Tab 1',
    content: 'Some text 1',
  };

  onTabSelected = (tab) => {
    this.setState({
      selectedTab: tab.title,
      content: tab.content,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="header">
            Selected tab is&nbsp;
            {this.state.selectedTab}
          </h1>
          <p className="content">
            {this.state.content}
          </p>
          <Tabs
            tabs={tabs}
            tabToSelect={this.onTabSelected}
            currentTab={this.state.selectedTab}
          />
        </div>
      </div>
    );
  }
}

export default App;
