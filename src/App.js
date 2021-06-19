import React from 'react';
import Tabs from './Tabs';
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
  selectedTab: 'Tab 1',
  selectedTabId: 'tab-1',
}

onTabSelected = (tab) => {
  if (tab.tab.title === this.state.selectedTab) {
    return;
  }

  this.setState({
    selectedTab: tab.title, selectedTabId: tab.id,
  });
}

render() {
  return (
    <div className="App">
      <h1>
        Selected tab is
        {this.state.selectedTab}
        <Tabs
          tabs={tabs}
          selectedTabId={this.state.selectedTabId}
          onTabSelected={this.onTabSelected}
        />
      </h1>
    </div>
  );
}
}

export default App;
