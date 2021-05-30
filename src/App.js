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
    tabSelectedId: 1,
  }

  selectTab = (tabId) => {
    this.setState({ tabSelectedId: tabId });
  }

  render() {
    const { tabSelectedId } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;Tab
          {tabSelectedId}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTabId={tabSelectedId}
          selectTab={this.selectTab}
        />
      </div>
    );
  }
}

export default App;
