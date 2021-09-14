import React from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface State {
  selectedTab: Tab;
  selectedTabId: string;
}

class App extends React.Component<{}, State> {
  state: State = {
    selectedTab: tabs[0],
    selectedTabId: tabs[0].id,
  };

  onTabSelected = (tab: Tab) => {
    this.setState({
      selectedTab: tab,
      selectedTabId: tab.id,
    });
  };

  render() {
    const { selectedTab, selectedTabId } = this.state;

    return (
      <div className="App">

        <h1>
          {'Selected tab is '}
          {selectedTab.title}
        </h1>

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
