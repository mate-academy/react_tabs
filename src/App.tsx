import React from 'react';
import { Tabs } from './components/Tabs/Tabs';
import { Tab } from './types/types';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

class App extends React.Component {
  state = {
    activeTab: tabs[0],
  };

  ontabSelected = (tab: Tab) => (
    this.setState({
      activeTab: tab,
    })
  );

  render() {
    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {this.state.activeTab.title}
        </h1>
        <Tabs
          tabs={[...tabs]}
          selectedTabId={this.state.activeTab.id}
          onTabSelected={this.ontabSelected}
        />
      </div>
    );
  }
}

export default App;
