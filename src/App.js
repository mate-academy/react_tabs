import React from 'react';

import './App.css';

import { Tabs } from './Tabs';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

export class App extends React.PureComponent {
  state = {
    selectedTabId: 'tab-1',
  }

  change = (id) => {
    this.setState({
      selectedTabId: id,
    });
  }

  render() {
    const { selectedTabId } = this.state;
    const visibleTabs = [...tabs].map(tab => ({
      ...tab,
      visible: 'none',
    }));

    visibleTabs.find(tab => tab.id === selectedTabId).visible = 'inline';

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {selectedTabId.slice(-1)}
        </h1>
        <Tabs
          visibleTabs={visibleTabs}
          change={this.change}
        />
      </div>
    );
  }
}
