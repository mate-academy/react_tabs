import React from 'react';
import Tabs from './Tabs';

import './App.scss';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.PureComponent {
  state = {
    selectedTab: tabs[0],
  }

  changeSelectedTab = (tabId) => {
    const { selectedTab } = this.state;

    if (tabId === selectedTab.id) {
      return;
    }

    this.setState({
      selectedTab: tabs.find(tab => tab.id === tabId),
    });
  }

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          { selectedTab.title }
        </h1>
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          onChange={this.changeSelectedTab}
        />
      </div>
    );
  }
}

export default App;
