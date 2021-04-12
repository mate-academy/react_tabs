import React from 'react';

import './App.scss';
import { TabsList } from './components/TabsList';

/* eslint-disable */
const tabsFromServer = [
  {id: 'tab-1', title: 'Tab 1', content: 'Some text 1'},
  {id: 'tab-2', title: 'Tab 2', content: 'Some text 2'},
  {id: 'tab-3', title: 'Tab 3', content: 'Some text 3'},
];

/* eslint-enable */

export class App extends React.Component {
  state = {
    tabs: [...tabsFromServer],
    selectedTab: tabsFromServer[0].title,
  }

  onSelectedTab = (tabTitle) => {
    this.setState({
      selectedTab: tabTitle,
    });
  }

  render() {
    const { selectedTab, tabs } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {selectedTab}
        </h1>
        <TabsList
          tabs={tabs}
          selectedTab={selectedTab}
          onSelectedTab={this.onSelectedTab}
        />
      </div>
    );
  }
}

export default App;
