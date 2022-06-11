import React from 'react';
import { Tabs } from './components/Tabs/Tabs';

import './App.scss';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

class App extends React.Component {
  state = {
    selectedTab: 'Tab 1',
    allTabs: [...tabs],
  };

  onTabSelected = (newTab: string) => {
    this.setState({
      selectedTab: newTab,
    });
  };

  render() {
    const { selectedTab, allTabs } = this.state;
    const curentEl = allTabs.find(el => el.title === selectedTab);

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {selectedTab}
        </h1>
        <Tabs
          allTabs={allTabs}
          selectedTabId={(curentEl) ? curentEl.id : undefined}
          onChange={this.onTabSelected}
        />
      </div>
    );
  }
}
export default App;
