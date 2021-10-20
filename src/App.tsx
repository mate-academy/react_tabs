import React from 'react';
import { Tabs } from './Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface State {
  currentTab: Tab,
}

export default class App extends React.Component<{}, State> {
  state: State = {
    currentTab: tabs[0],
  };

  chooseTab = (tab: Tab) => {
    this.setState({
      currentTab: tab,
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="app__article">
          {`Selected tab is ${this.state.currentTab.title}`}
        </h1>

        <Tabs
          tabs={tabs}
          selectedTab={this.state.currentTab}
          chooseTab={this.chooseTab}
        />
      </div>
    );
  }
}
