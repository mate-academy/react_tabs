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

export class App extends React.PureComponent {
  state = {
    tabsToShow: tabs,
    selectedTabId: 'tab-1',
  }

  onTabSelected = (tabSelected) => {
    this.setState({
      selectedTabId: tabSelected,
    });
  }

  render() {
    const { tabsToShow, selectedTabId } = this.state;
    const selectedTab = tabs.find(tab => selectedTabId === tab.id);

    return (
      <div className="App">
        <h1>{`Selected tab is ${selectedTab.title}`}</h1>
        <ul>
          <Tabs
            tabs={tabsToShow}
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
