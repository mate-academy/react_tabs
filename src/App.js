import React from 'react';

import './App.scss';
import Tabs from './Tabs';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    selectedTabId: tabs[0].id,
  }

  onTabSelected = (event) => {
    if (this.state.selectedTabId === event.target.value) {
      return;
    }

    this.setState({
      selectedTabId: event.target.value,
    });
  }

  render() {
    const { selectedTabId } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is
          {tabs.find(tab => tab.id === selectedTabId).title}
        </h1>
        <Tabs
          tabs={tabs}
          onTabSelected={this.onTabSelected}
          selectedTabId={selectedTabId}
        />
      </div>
    );
  }
}

export default App;
