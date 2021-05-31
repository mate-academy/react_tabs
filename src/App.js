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
    selectedTab: tabs[0],
  }

  selectedTabId = (id) => {
    this.setState({
      selectedTab: tabs.find(tab => tab.id === id),
    });
  }

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <Tabs
          tabs={tabs}
          value={selectedTab}
          onChange={(id) => {
            this.selectedTabId(id);
          }}
        />
      </div>
    );
  }
}

export default App;
