import React from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

/* eslint-disable */
const startTabs = [
  { id: 'tab-1', title: 'Home', content: 'Some text 1' },
  { id: 'tab-2', title: 'Profile', content: 'Some text 2' },
  { id: 'tab-3', title: 'Contacts', content: 'Some text 3' },
];
/* eslint-enable */

export class App extends React.Component {
  state = {
    tabs: startTabs.map(tab => ({ ...tab })),
    selectedTabId: 'tab-1',
  }

  onTabSelected = (tabId) => {
    this.setState({ selectedTabId: tabId });
  }

  render() {
    const { tabs, selectedTabId } = this.state;

    return (
      <div className="App">
        <h1>{`Selected tab is: ${selectedTabId}`}</h1>
        <Tabs
          selectedTabId={selectedTabId}
          tabs={tabs}
          onTabSelected={this.onTabSelected}
        />
      </div>
    );
  }
}
