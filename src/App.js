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
    tabSelected: tabs[0],
  }

  findTabById= tabId => (tabs.find(tab => tab.id === tabId));

  selectTab = (tabId) => {
    this.setState({ tabSelected: this.findTabById(tabId) });
  }

  render() {
    const { tabSelected } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {tabSelected.title}
        </h1>
        <Tabs
          tabs={tabs}
          selectTab={this.selectTab}
          selectedTabContent={this.state.tabSelected.content}
        />
      </div>
    );
  }
}

export default App;
