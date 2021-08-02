import React from 'react';

import './App.scss';

import { Tabs } from './components/Tabs/Tabs';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

export class App extends React.PureComponent {
  state = {
    selectedTabId: 'tab-2',
  }

  onTabSelected = (selectedTab) => {
    this.setState({
      selectedTabId: selectedTab,
    });
  }

  render() {
    const { selectedTabId } = this.state;
    const selectedTab = tabs.find(tab => selectedTabId === tab.id);

    return (
      <div>
        <h1>{`Selected tab is ${selectedTab.title}`}</h1>
        <ul className="list">
          <Tabs
            tabs={tabs}
            selectedTabId={selectedTabId}
            onTabSelected={this.onTabSelected}
          />
        </ul>
        <p>{selectedTab.content}</p>
      </div>
    );
  }
}

export default App;
