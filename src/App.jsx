import React from 'react';

import { Tabs } from './Tabs';

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
    tabId: 'tab-1',
    tabTitle: 'Tab 1',
  }

  tabSelect = ({ id, title }) => {
    this.setState({
      tabId: id,
      tabTitle: title,
    });
  }

  render() {
    const { tabId, tabTitle } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {tabTitle}
        </h1>

        <Tabs
          tabs={tabs}
          selectedTabId={tabId}
          onTabSelected={this.tabSelect}
        />
      </div>
    );
  }
}

export default App;
