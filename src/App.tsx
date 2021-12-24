import React from 'react';

import './App.scss';
import { Tabs } from './Components/Tabs/Tabs';
import { Tab } from './types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTab: number,
};

class App extends React.Component<{}, State> {
  state = {
    selectedTab: 1,
  };

  changeTab = (tabId: any) => {
    this.setState({ selectedTab: tabs.findIndex(tab => tab.id === tabId) + 1 });
  };

  render() {
    return (
      <div className="App">
        <Tabs
          tabs={tabs}
          selectedTab={this.state.selectedTab}
          changeTab={this.changeTab}
        />
      </div>
    );
  }
}

export default App;
