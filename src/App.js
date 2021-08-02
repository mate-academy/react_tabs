import React from 'react';
import Tabs from './components/Tabs';

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

  onChange = (clickedTab) => {
    if (this.state.selectedTab.id !== clickedTab.id) {
      this.setState({
        selectedTab: clickedTab,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Tabs
          tabs={tabs}
          selectedTab={this.state.selectedTab}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default App;
