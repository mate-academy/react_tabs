import React from 'react';

import './App.scss';
import { Tab } from './components/Tab';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

export class App extends React.Component {
  state = {
    selectedTab: tabs[0],
  }

  selectTab = (selected) => {
    if (selected === this.selectedTab) {
      return;
    }

    this.setState({ selectedTab: selected });
  }

  render() {
    const { selectedTab } = this.state;

    return (
      <>
        <div className="App">
          <h1>
            Вкладка:
            {selectedTab.title}
          </h1>
          <Tab
            tabs={tabs}
            onTabSelected={this.selectTab}
            selectedTab={selectedTab}
          />
        </div>
      </>
    );
  }
}
