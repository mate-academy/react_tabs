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

class App extends React.Component {
  state ={
    selectedTabId: 'tab-1',
  }

  onTabSelected = (id) => {
    this.setState({
      selectedTabId: id,
    });
  };

  render() {
    const { selectedTabId } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {tabs.find(tab => tab.id === selectedTabId).title}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTabId}
          onTabSelected={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
