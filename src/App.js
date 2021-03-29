import React from 'react';
import { Tabs } from './Tabs';

import './App.css';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    currentTab: tabs[0],
  }

  handleSelectedTab = (event) => {
    const selectedTab = tabs.find(tab => tab.id === event.target.id);

    this.setState({
      currentTab: selectedTab,
    });
  }

  render() {
    const {
      currentTab,
    } = this.state;

    return (
      <div className="App">
        <h1 className="title">
          Selected tab is&nbsp;
          {currentTab.title}
        </h1>

        <Tabs
          tabs={tabs}
          showSelectedTabContent={this.handleSelectedTab}
          activeId={currentTab.id}
        />
        <p>
          {currentTab.content}
        </p>
      </div>
    );
  }
}

export default App;
