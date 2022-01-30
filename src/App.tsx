import React from 'react';
import { Tabs } from './Tabs';

import './App.scss';

const tabsFromServer: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  tabs: Tab[],
  selectedTabId: string,
};

class App extends React.Component <{}, State> {
  state = {
    tabs: tabsFromServer,
    selectedTabId: tabsFromServer[0].id,
  };

  onTabSelected = (tab: Tab) => {
    this.setState({
      selectedTabId: tab.id,
    });
  };

  selectedTabTitle = () => {
    const { tabs, selectedTabId } = this.state;

    const selectTab = tabs.find(tab => tab.id === selectedTabId);

    return selectTab?.title;
  };

  render() {
    const { tabs, selectedTabId } = this.state;

    return (
      <div className="App">
        <h1 className="title">
          Selected tab is&nbsp;
          {this.selectedTabTitle()}
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
