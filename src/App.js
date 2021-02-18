import React from 'react';
import { Tabs } from './components/Tabs/Tabs';

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
    selectedTab: 'tab-1',
  }

  setTabId = (tabId) => {
    this.setState({ selectedTab: tabId });
  }

  render() {
    const { selectedTab } = this.state;
    const { content, title } = tabs.find(
      tab => tab.id === selectedTab,
    );

    return (
      <div className="App">
        <h1>Selected tab is&nbsp;{title}</h1>
        <Tabs
          tabs={tabs}
          setTabId={this.setTabId}
          selectedTab={selectedTab}
        />
        <p>
          {content}
        </p>
      </div>
    )
  }
};

export default App;
