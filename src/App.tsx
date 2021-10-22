import React from 'react';

import './App.scss';
import { Tab, State } from './types/Type';
import { Tabs } from './components/Tabs/index';

const tabsFromServer: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

class App extends React.Component<{}, State> {
  state: State = {
    tabs: tabsFromServer,
    selectedTabId: 'tab-1',
  };

  onTabSelected = (tabId: string) => {
    this.setState({ selectedTabId: tabId });
  };

  render() {
    const { tabs, selectedTabId } = this.state;

    return (
      <div className="App">
        <h1>
          {`Selected tab is ${tabs.find(tab => tab.id === selectedTabId)?.title}`}
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
