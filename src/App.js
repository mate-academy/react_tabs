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

class App extends React.Component {
  state = {
    tab: tabs[0],
  }

  onTabSelected = (tab) => {
    this.setState({
      tab,
    });
  }

  render() {
    const { tab } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {tab.title}
        </h1>
        <Tabs
          appTabs={tabs}
          onTabSelected={this.onTabSelected}
          selectedTabId={tab.id}
        />
        <div>
          {tab.content}
        </div>
      </div>
    );
  }
}

export default App;
