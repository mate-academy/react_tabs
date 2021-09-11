import React from 'react';

import './App.scss';
import { Tabs } from './Components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface State {
  selectedTab: Tab;
}

class App extends React.Component<{}, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  onTabSelected = (newSelectedTab: Tab) => {
    this.setState({
      selectedTab: newSelectedTab,
    });
  };

  render() {
    const { selectedTab } = this.state;
    const { title } = selectedTab;

    return (
      <div className="App">
        <h1>{`Selected tab is ${title}`}</h1>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTab.id}
          selectTab={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
