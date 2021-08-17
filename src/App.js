import React from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

export class App extends React.PureComponent {
  state = {
    selectedTab: tabs[0],
  }

  onTabSelected = (tab) => {
    this.setState({
      selectedTab: tab,
    });
  }

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          onTabSelected={this.onTabSelected}
        />
        <div className="App__content">
          <h1 className="App__title">
            {`Selected tab is ${this.state.selectedTab.title}`}
          </h1>
          <p className="App__content">{selectedTab.content}</p>
        </div>
      </div>
    );
  }
}
