import React from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

/* eslint-disable */
const tabsFromServer = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

const tabsCopy = tabsFromServer.map(tab => ({ ...tab }));

export class App extends React.Component {
  state = {
    tabs: tabsCopy,
    selectedTabId: 'tab-1',
  }

  selectTab = (id) => {
    this.setState({
      selectedTabId: id,
    });
  };

  render() {
    const { tabs, selectedTabId } = this.state;

    return (
      <div className="App">
        <h1 className="App__heading">
          Selected tab is:
          <i>
            {` ${selectedTabId}`}
          </i>
        </h1>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTabId}
          selectTab={this.selectTab}
        />
      </div>
    );
  }
}
