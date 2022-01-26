import React from 'react';

import './App.scss';
import { TabsList } from './components/TabsList';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  ourTabs: Tab[],
  selectedTab: Tab,
};

class App extends React.Component<{}, State> {
  state: State = {
    ourTabs: [...tabs],
    selectedTab: tabs[0],
  };

  changeTab = (tab: Tab) => {
    this.setState({ selectedTab: tab });
  };

  render() {
    const { selectedTab, ourTabs } = this.state;

    return (
      <div className="App">
        <h1>{`Selected tab is ${selectedTab.title}`}</h1>
        <TabsList
          ourTabs={ourTabs}
          selectedTab={selectedTab}
          onChange={this.changeTab}
        />
      </div>
    );
  }
}

export default App;
