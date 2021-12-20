import React from 'react';

import './App.scss';
import { Tabs } from './components/Tabs/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'bla '.repeat(265) },
  { id: 'tab-2', title: 'Tab 2', content: 'ol '.repeat(160) },
  { id: 'tab-3', title: 'Tab 3', content: 'hoho '.repeat(125) },
];

type State = {
  selectedTab: Tab,
};

class App extends React.Component<{}, State> {
  state = {
    selectedTab: tabs[0],
  };

  onTabSelected = (tab: Tab) => {
    this.setState({ selectedTab: tab });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {`Selected tab is ${selectedTab.title}`}
        </h1>
        <div className="App__content">
          <Tabs
            tabs={tabs}
            selectedTabId={selectedTab.id}
            onTabSelected={this.onTabSelected}
          />
          <p className="App__info">{selectedTab.content}</p>
        </div>
      </div>
    );
  }
}

export default App;
