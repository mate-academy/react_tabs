import React from 'react';
import { Tabs } from './Tabs';
// import './App.scss';

/* eslint-disable */
const tabsFromServer = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

export class App extends React.Component {
  state = {
    tabs: tabsFromServer.map(tab => ({ ...tab })),
    selectedTabId: 'Tab 1',
  }

  selectTab = (title) => {
    this.setState({
      selectedTabId: title,
    });
  };

  render() {
    const { tabs, selectedTabId } = this.state;

    return (
      <>
        <h1>
          Selected tab is
          {` ${selectedTabId}`}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTabId}
          selectTab={this.selectTab}
        />
      </>
    );
  }
}
