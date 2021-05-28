import React from 'react';

import './App.css';
import { Tabs } from './Components/Tabs/Tabs';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    tabsList: [...tabs],
    selectedTabId: 'tab-1',
  }

  onTabSelected = (tabId) => {
    const { selectedTabId } = this.state;

    if (tabId === selectedTabId) {
      return;
    }

    this.setState({ selectedTabId: tabId });
  }

  render() {
    const { tabsList, selectedTabId } = this.state;

    return (
      <div className="App">
        <h1>
          {
            `Selected tab is ${tabsList
              .find(tab => tab.id === selectedTabId)
              .title}`
          }
        </h1>
        <Tabs
          tabs={tabsList}
          selectedTabId={selectedTabId}
          selectTabHandler={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
