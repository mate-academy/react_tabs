import React from 'react';

import './App.scss';
import { Tab } from './Tab';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

export class App extends React.Component {
  state = {
    selectedTads: tabs[0],
  };

  selectedTab = (tab) => {
    this.setState({
      selectedTads: tab,
    });
  };

  render() {
    const { selectedTads } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {selectedTads.title}
        </h1>
        <Tab
          tabs={tabs}
          selectedTads={selectedTads}
          selectedTab={this.selectedTab}
        />
      </div>
    );
  }
}
