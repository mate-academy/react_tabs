import React from 'react';

import { Tabs } from './Tabs/Tabs';
import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTab: string
  selectedTabId: number;
};

class App extends React.PureComponent<{}, State> {
  state = {
    selectedTabId: 0,
    selectedTab: tabs[0].title,
  };

  onTabSelected = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    const { textContent } = event.currentTarget;

    const selectedTabId = tabs.findIndex(tab => tab.title === textContent);

    if (selectedTabId !== undefined) {
      this.setState({
        selectedTabId,
        selectedTab: tabs[selectedTabId].title,
      });
    }
  };

  render() {
    const { selectedTabId, selectedTab } = this.state;

    return (
      <div className="App">
        <h1>{`Selected tab is ${selectedTab}`}</h1>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTabId}
          onTabSelected={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
