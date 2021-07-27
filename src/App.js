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

  chooseTab = (tab) => {
    this.setState({
      selectedTab: tab,
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">
          {`Selected tab is ${this.state.selectedTab.id.replace(/-/g, ' ')}`}
        </h1>
        <Tabs
          tabs={tabs}
          choose={this.chooseTab}
          selectedTab={this.state.selectedTab}
        />
      </div>
    );
  }
}

export default App;
