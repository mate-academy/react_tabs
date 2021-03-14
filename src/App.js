import React from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    tabs,
    selectedTab: tabs[0],
    tabContent: tabs[0].content,
    active: tabs[0].id,
  }

  onContent = (tab) => {
    this.setState({
      tabContent: tab.content,
      selectedTab: tab,
      active: tab.id,
    });
  }

  render() {
    const { selectedTab, tabContent, active } = this.state;

    return (
      <div className="App">
        <h1>{`Selected tab: ${selectedTab.title}`}</h1>
        <Tabs
          tabs={this.state.tabs}
          tabContent={tabContent}
          onContent={this.onContent}
          active={active}
        />
      </div>
    );
  }
}

export default App;
