import React from 'react';

import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface State {
  selectedTabId: string;
  tabIndex: number;
}

class App extends React.PureComponent<{}, State> {
  state: State = {
    selectedTabId: tabs[0].id,
    tabIndex: 0,
  };

  onTabSelected = (tabId: string) => {
    if (tabId === this.state.selectedTabId) {
      return;
    }

    this.setState({
      selectedTabId: tabId,
      tabIndex: tabs.findIndex(tab => tab.id === tabId),
    });
  };

  render() {
    return (
      <div className="app">
        <Tabs
          tabs={tabs}
          selectedTabId={this.state.selectedTabId}
          tabIndex={this.state.tabIndex}
          onTabSelected={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
