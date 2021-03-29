import React from 'react';
import { Tabs } from './Tabs';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

export class App extends React.Component {
  state = {
    selectedTab: tabs[0].id,
  };

  onTabSelected = (activeTab) => {
    this.setState({
      selectedTab: activeTab,
    });
  }

  render() {
    const { selectedTab } = this.state;

    return (
      <div>
        <h1>
          Selected tab is
          {selectedTab.content}
        </h1>

        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          onTabSelected={this.onTabSelected}
        />
      </div>

    );
  }
}

export default App;
