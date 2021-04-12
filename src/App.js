import React from 'react';
import Tabs from './components/Tabs/Tabs';

import './App.scss';

/* eslint-disable */
const tabsList = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.PureComponent {
  state = {
    tabs: [...tabsList],
    selectedTab: {
      id: 'tab-1', title: 'Tab 1', content: 'Some text 1',
    },
    selectedTabId: 'tab-1',
  }

  onTabSelected = (tabId) => {
    this.setState(prevState => ({
      selectedTab: prevState.tabs.find(tab => tab.id === tabId),
      selectedTabId: tabId,
    }));
  }

  render() {
    const { tabs, selectedTab, selectedTabId } = this.state;

    return (
      <div className="App text-center m-5 w-50
        d-flex flex-column align-items-center"
      >
        <h1>
          Selected tab is&nbsp;
          {selectedTab.title}
        </h1>

        <Tabs
          tabs={tabs}
          onTabSelected={this.onTabSelected}
          selectedTabId={selectedTabId}
        />

      </div>
    );
  }
}

export default App;
