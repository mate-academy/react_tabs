import React from 'react';

import './App.css';

import Tabs from './Tabs';

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
    currentTabId: tabs.find(tab => tab.id === 'tab-1').id,
    currentTabTitle: tabs.find(tab => tab.id === 'tab-1').title,
  }

  chooseTab = (id) => {
    this.setState({
      tabs,
      currentTabId: tabs.find(tab => tab.id === id).id,
      currentTabTitle: tabs.find(tab => tab.id === id).title,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          { this.state.currentTabTitle }
        </h1>

        <Tabs
          tabs={this.state.tabs}
          chooseTab={this.chooseTab}
          currentTabId={this.state.currentTabId}
        />

        <hr className="tab__horizontal__line" />
        <div className="tab__text">
          {this.state.tabs.find(
            tab => tab.id === this.state.currentTabId,
          ).title}
        </div>
      </div>
    );
  }
}

export default App;
