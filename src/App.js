import React from 'react';
import { Tabs } from './components/Tabs';

import 'bootstrap/dist/css/bootstrap.min.css';
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
    selectedTab: tabs[0],
  }

  onTabSelected = (newTab) => {
    this.setState({
      selectedTab: newTab,
    });
  }

  render() {
    const { onTabSelected, state: { selectedTab } } = this;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {selectedTab.title}
        </h1>

        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          onTabSelected={onTabSelected}
          domID="TabContainer"
        >
          <div>hello world</div>
        </Tabs>
      </div>
    );
  }
}

export default App;
