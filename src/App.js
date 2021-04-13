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

export class App extends React.Component {
  state = {
    selectedTab: 'Tab 1',
    selectedTabId: 'tab-1',
  }

  onTabSelected = (title, id) => {
    this.setState({
      selectedTab: title,
      selectedTabId: id,
    });
  }

  render() {
    const { selectedTab, selectedTabId } = this.state;

    return (
      <div className="tabs">
        <h1>
          Selected tab is&nbsp;
          {selectedTab}
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
