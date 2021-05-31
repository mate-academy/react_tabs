import React from 'react';
import { Tabs } from './Tabs';

import './App.scss';

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

  onTabSelected = (event) => {
    this.setState({
      selectedTab: tabs
        .find(tab => tab.title === event.target.textContent),
    });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {`${selectedTab.title}`}
        </h1>

        <div>
          <Tabs
            tabs={tabs}
            onTabSelected={this.onTabSelected}
          />
        </div>

        <p>
          {selectedTab.content}
        </p>
      </div>
    );
  }
}

export default App;
