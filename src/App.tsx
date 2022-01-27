import React from 'react';

import './App.scss';
import { Tabs } from './Components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTab: Tab,
  selectedTabId: string,
};

export class App extends React.Component<{}, State> {
  state: State = {
    selectedTab: tabs[0],
    selectedTabId: tabs[0].id,
  };

  handleTabChange = (tab: Tab) => {
    this.setState({
      selectedTab: tab,
      selectedTabId: tab.id,
    });
  };

  render() {
    const { selectedTab, selectedTabId } = this.state;

    return (
      <div className="App">
        <Tabs
          tabs={tabs}
          onTabSelected={(tab) => {
            this.handleTabChange(tab);
          }}
          selectedTab={selectedTab}
          selectedTabId={selectedTabId}
        />
        <h1>
          Selected tab is&nbsp;
          {selectedTab.title}
        </h1>
      </div>
    );
  }
}

export default App;
