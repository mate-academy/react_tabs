import React from 'react';
import { Tabs } from './components/Tabs';
import './App.scss';

/* eslint-disable */
const tabs = [
  { id: "tab-1", title: "Tab 1", content: "Some text 1" },
  { id: "tab-2", title: "Tab 2", content: "Some text 2" },
  { id: "tab-3", title: "Tab 3", content: "Some text 3" },
];
/* eslint-enable */

export class App extends React.Component {
  state = {
    selectedTab: tabs[0],
  };

  onTabSelected = (activeTab) => {
    if (activeTab.id === this.state.selectedTab.id) {
      return;
    }

    this.setState({
      selectedTab: tabs.find(tab => tab.id === activeTab.id),
    });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <>
        <h1>{`Selected tab is ${selectedTab.title}`}</h1>
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          onTabSelected={this.onTabSelected}
        />
      </>
    );
  }
}
export default App;
