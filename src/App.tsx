import React from 'react';

import './App.scss';
import { Tabs } from './components/Tabs';

const preparedTabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  tabs: Tab[];
  selectedTabId: string;
  tabTitle: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    tabs: preparedTabs,
    selectedTabId: preparedTabs[0].id,
    tabTitle: preparedTabs[0].title,
  };

  getSelectedTab = (id: string) => (
    this.state.tabs.find((tab) => (
      tab.id === id
    )));

  onTabSelected = (id: string) => {
    if (this.state.selectedTabId === id) {
      return;
    }

    const { tabTitle } = this.state;

    const selectedTab = this.getSelectedTab(id);

    const selectedTabTitle = selectedTab ? selectedTab.title : tabTitle;

    this.setState(({
      selectedTabId: id,
      tabTitle: selectedTabTitle,
    }));
  };

  render() {
    const { tabs, selectedTabId, tabTitle } = this.state;

    return (
      <div className="App container">
        <div className="h1">
          Selected tab is&nbsp;

          {tabTitle}
        </div>

        <Tabs
          tabs={tabs}
          onTabSelected={this.onTabSelected}
          selectedTabId={selectedTabId}
        />
      </div>
    );
  }
}

export default App;
