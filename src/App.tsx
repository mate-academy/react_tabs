import React from 'react';
import { Tabs } from './components/Tabs';
import { Tab } from './types/Tab';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

class App extends React.Component {
  state = {
    selectedTab: tabs[0].title,
    selectedTabId: tabs[0].id,
  };

  onTabSelected = (tab: Tab) => {
    this.setState({
      selectedTab: tab.title,
      selectedTabId: tab.id,
    });
  };

  render() {
    const { selectedTab, selectedTabId } = this.state;

    return (
      <div className="app">
        <h1>
          Selected tab is&nbsp;
          {selectedTab}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTabId}
          onTabSelected={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
