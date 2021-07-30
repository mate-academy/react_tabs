import React from 'react';

import './App.scss';
import { Tab } from './components/Tab';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    selectedTabId: 'tab-2',
  }

  selectTab = (tabId) => {
    this.setState({
      selectedTabId: tabId,
    });
  };

  render() {
    const { selectedTabId } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is
          {selectedTabId}
        </h1>

        <Tab
          tabs={tabs}
          selectedTabId={selectedTabId}
          onTabSelected={this.selectTab}
        />
      </div>
    );
  }
}

export default App;
