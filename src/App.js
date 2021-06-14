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
    selectedTab: tabs[0],
  }

  selectTab = tab => this.setState({ selectedTab: tab });

  render() {
    return (
      <div className="App">
        <Tabs
          tabs={tabs}
          selectedTabId={this.state.selectedTab.id}
          onTabSelected={this.selectTab}
        />
        <div className="content">
          <h1>
            Selected tab is&nbsp;
            {this.state.selectedTab.title}
          </h1>
          {this.state.selectedTab.content}
        </div>
      </div>
    );
  }
}

export default App;
