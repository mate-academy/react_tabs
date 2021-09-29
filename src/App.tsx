import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { Tabs } from './components/Tabs/Tabs';

const tabsFromServer: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Props = {};

type State = {
  tabs: Tab[];
  selectedTab: Tab;
};

class App extends React.Component<Props, State> {
  state: State = {
    tabs: tabsFromServer,
    selectedTab: tabsFromServer[0],
  };

  setSelectedTab = (tab: Tab) => {
    this.setState({ selectedTab: tab });
  };

  render() {
    const { tabs, selectedTab } = this.state;

    return (
      <div className="App">
        <h1>
          {'Selected tab is '}
          {selectedTab.title}
        </h1>
        <Tabs
          tabs={tabs}
          onTabSelect={this.setSelectedTab}
          selectedTabId={selectedTab.id}
        />
      </div>
    );
  }
}

export default App;
