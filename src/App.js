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

  getTabById = id => tabs.find(tab => tab.id === id);

  selectTab = (selectedTabId) => {
    this.setState(prevState => (
      prevState.selectedTab.id === selectedTabId
        ? 0
        : { selectedTab: this.getTabById(selectedTabId) }
    ));
  }

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTab.id}
          onTabSelected={this.selectTab}
        />
        <div className="content">
          <h1 className="h1">
            Selected tab is&nbsp;
            {selectedTab.title}
          </h1>
        </div>
      </div>
    );
  }
}

export default App;
