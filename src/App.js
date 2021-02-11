import React from 'react';
import { TabsList } from './TabsList';

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

  onTabSelected = (tabId) => {
    this.setState({ selectedTab: tabId });
  }

  render() {
    const { content, title } = tabs.find(
      tab => tab.id === this.state.selectedTab,
    );

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {title}
        </h1>
        <TabsList
          selectedTab={this.state.selectedTab}
          tabs={tabs}
          onTabSelected={this.onTabSelected}
        />
        <div className="content">
          <p>{content}</p>
        </div>
      </div>
    );
  }
}

export default App;
