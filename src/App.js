import React from 'react';
import { Tabs } from './Tabs';

import './App.scss';

const tabs = [
  {
    id: 'tab-1', title: 'Tab 1', content: 'Some text 1',
  },
  {
    id: 'tab-2', title: 'Tab 2', content: 'Some text 2',
  },
  {
    id: 'tab-3', title: 'Tab 3', content: 'Some text 3',
  },
];

class App extends React.Component {
  state = {
    selectedTab: tabs[0],
  }

  selectTab = (tabId) => {
    if (this.state.selectedTab.id === tabId) {
      return;
    }

    this.setState({
      selectedTab: tabs.find(tab => tab.id === tabId),
    });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          onTabSelected={this.selectTab}
        />
      </div>
    );
  }
}
export default App;
