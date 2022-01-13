import React from 'react';
import { Tabs } from './Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTab: Tab,
};

export class App extends React.Component<{}, State> {
  state = {
    selectedTab: tabs[0],
  };

  onTabSelected = (index: number) => {
    this.setState({
      selectedTab: tabs[index],
    });
  };

  render() {
    const { id, title } = this.state.selectedTab;

    return (
      <div className="App">
        <h1>{`Selected tab is ${title}`}</h1>
        <Tabs
          tabs={tabs}
          selectedTabId={id}
          onTabSelected={this.onTabSelected}
        />
      </div>
    );
  }
}
