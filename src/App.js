import React from 'react';
import { Tabs } from './components/Tabs';

import './App.css';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    selectedTabId: 'tab-1',
  };

  onTabSelect = (tabId) => {
    this.setState({
      selectedTabId: tabId,
    });
  }

  render() {
    const { selectedTabId } = this.state;
    const selectedTab = tabs.find(tab => (
      tab.id === selectedTabId
    ));
    const { content } = selectedTab;
    const { title } = selectedTab;

    return (
      <div className="App">
        <h1>
          Selected tab is
          {title}
        </h1>
        <Tabs
          onTabSelect={this.onTabSelect}
          tabs={tabs}
          selectedTabId={selectedTabId}
        />
        <div className="content">
          {content}
        </div>
      </div>
    );
  }
}

export default App;
