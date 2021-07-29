import React from 'react';

import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.PureComponent {
  state = {
    selectedTabId: 'tab-1',
  };

  changeSelectedTab = (newTabId) => {
    this.setState({
      selectedTabId: newTabId,
    });
  };

  render() {
    const { selectedTabId } = this.state;
    const selectedTab = tabs.find(
      tab => tab.id === selectedTabId,
    );

    return (
      <div className="App">
        <h1 className="title">
          {`Selected tab is ${selectedTab.title}`}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTabId}
          onTabSelected={this.changeSelectedTab}
        />
      </div>
    );
  }
}

export default App;
