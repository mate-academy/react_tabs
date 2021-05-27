import React from 'react';
import Tabs from './components/Tabs/Tabs';

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
    selectedTabId: 'tab-1',
  };

  selectTab = tab => this.setState({ selectedTabId: tab.id });

  render() {
    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {tabs.find(
            tab => this.state.selectedTabId === tab.id,
          ).title
          }
        </h1>

        <Tabs
          tabs={tabs}
          onTabSelected={this.selectTab}
          selectedTabId={this.state.selectedTabId}
        />
        <p>
          {tabs.find(tab => this.state.selectedTabId === tab.id).content}
        </p>
      </div>
    );
  }
}

export default App;
