import React from 'react';

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
    prepareTabs: tabs.map(tab => ({
      ...tab,
      visible: 'none',
    })),
  }

  change = (id) => {
    this.setState({
      prepareTabs: tabs.map(tab => ({
        ...tab,
        visible: 'none',
      })),
      selectedTabId: id,
    });
  }

  render() {
    const { selectedTabId, prepareTabs } = this.state;
    const visibleTab
      = prepareTabs.find(tab => tab.id === this.state.selectedTabId);

    visibleTab.visible = 'inline';

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {selectedTabId.slice(-1)}
        </h1>
        <Tabs
          visibleTabs={prepareTabs}
          change={this.change}
        />
      </div>
    );
  }
}
