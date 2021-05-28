import React from 'react';
import Tabs from './components/Tabs/Tabs';

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
    savedTabs: [...tabs],
    tab: '',
    selectedTab: tabs[0],
  }

  onTabSelected = (tab) => {
    this.setState(state => ({
      ...state,
      tab: tab.id,
      selectedTab: tab,
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {this.state.tab || 'tab-1'}
        </h1>
        <Tabs
          tabs={this.state.savedTabs}
          onTabSelected={this.onTabSelected}
          selectedTab={this.state.selectedTab}
        />
      </div>
    );
  }
}

export default App;
