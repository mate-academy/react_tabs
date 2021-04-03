import React from 'react';
import Tabs from './components/Tabs';

import './scss/App.scss';

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
    selectedTabId: tabs[0].id,
  }

  onTabSelected = (tab) => {
    this.setState({
      selectedTab: tab,
      selectedTabId: tab.id,
    });
  }

  render() {
    const { selectedTab, selectedTabId } = this.state;

    return (
      <div className="container">
        <h1>
          Selected tab is&nbsp;
          {selectedTab.title}
        </h1>
        <div className="panel">
          <nav className="tabs-nav">
            <Tabs
              tabs={tabs}
              selectedTabId={selectedTabId}
              onTabSelected={this.onTabSelected}
            />
          </nav>
          <p className="tabs-content">{selectedTab.content}</p>
        </div>
      </div>
    );
  }
}

export default App;
