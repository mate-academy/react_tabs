import React from 'react';

import './App.scss';

import { Tabs } from './components/Tabs';

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
    selectedTabTitle: 'Tab 1',
    selectedTabContent: 'Some text 1',
  }

  selectedTab = (tab) => {
    this.setState({
      selectedTabTitle: tab.title,
      selectedTabId: tab.id,
      selectedTabContent: tab.content,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>
          Selected tab is
          {' '}
          {this.state.selectedTabTitle}
        </h1>

        <Tabs
          tabs={[...tabs]}
          onTabSelected={this.selectedTab}
          {...this.state}
        />
      </div>
    );
  }
}

export default App;
