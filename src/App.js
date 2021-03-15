import React from 'react';

import './App.scss';
import { Tabs } from './components/Tabs';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

export class App extends React.Component {
  state = {
    selectedTab: tabs[0].id,
  }

  selectTabHandler = (id) => {
    this.setState({ selectedTab: id });
  }

  render() {
    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {this.state.selectedTab}
        </h1>
        <Tabs
          tabs={tabs}
          selectTabHandler={this.selectTabHandler}
          selectedTab={this.state.selectedTab}
        />
      </div>
    );
  }
}

export default App;
