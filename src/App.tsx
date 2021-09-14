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
  tabId: number;
}

class App extends React.PureComponent<{}, State> {
  state: State = {
    selectedTabId: tabs[0].id,
    tabId: 0,
  };

  onTabSelected = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({
      selectedTabId: event.currentTarget.value,
      tabId: tabs.findIndex(tab => tab.id === event.currentTarget.value),
    });
  };

  render() {
    return (
      <div className="app">
        <Tabs
          tabs={tabs}
          selectedTabId={this.state.selectedTabId}
          tabId={this.state.tabId}
          onTabSelected={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
