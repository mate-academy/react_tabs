import React from 'react';

import { Tabs } from '../Tabs';

import './App.scss';

type Tab = {
  id: string,
  title: string,
  content: string,
};

type State = {
  selectedTab: number,
  allTabs: Tab[],
};

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export class App extends React.Component<{}, State> {
  state = {
    selectedTab: 0,
    allTabs: tabs,
  };

  chengeTab = (index: number) => {
    this.setState({
      selectedTab: index,
    });
  };

  render() {
    const { selectedTab, allTabs } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {selectedTab + 1}
        </h1>
        <Tabs
          selectedTabId={selectedTab}
          allTabs={allTabs}
          chengeTab={this.chengeTab}
        />
      </div>
    );
  }
}
