import React from 'react';

import Tabs from './components/Tabs';

/* eslint-disable */
const tabsDB = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    tabs: [...tabsDB],
    selectedTab: tabsDB[0].id,
  }

  onTabSelected = (id) => {
    this.setState({
      selectedTab: id,
    });
  }

  render() {
    const { tabs, selectedTab } = this.state;

    return (
      <div className="App box">
        <h1 className="title is-5">
          Selected tab is&nbsp;
          {selectedTab}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          onTabSelected={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
