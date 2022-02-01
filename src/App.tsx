import React from 'react';
import { Tabs } from './Tabs';

import './App.scss';
import './Tabs.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTab: Tab,
};

export class App extends React.Component<{}, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  handleSelector = (tab: Tab) => {
    this.setState((
      { selectedTab: tab }
    ));
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          Selected tab is&thinsp;
          {selectedTab.title}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTab}
          handleSelector={this.handleSelector}
        />
      </div>
    );
  }
}
