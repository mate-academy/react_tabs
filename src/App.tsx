import React from 'react';

import './App.scss';
import { Tabs } from './Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Props = {};

type State = {
  selectedTab: Tab,
  selectedTabId: string,
};

class App extends React.Component<Props, State> {
  state = {
    selectedTab: tabs[0],
    selectedTabId: tabs[0].id,
  };

  onTabSelected = (tab: Tab, tabId: string): void => {
    if (tabId !== tab.id) {
      this.setState({
        selectedTab: tab,
        selectedTabId: tab.id,
      });
    }
  };

  render() {
    const { selectedTab, selectedTabId } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {'Selected tab is '}
          <span className="App__title--active">
            {selectedTab.title}
          </span>
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
