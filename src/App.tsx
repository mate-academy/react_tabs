import { Component } from 'react';
import tabs from './api/tabs';
import './App.scss';
import Tabs from './components/Tabs';

type State = {
  selectedTab: Tab;
};

class App extends Component<{}, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  onTabSelected = (tab: Tab) => {
    this.setState({ selectedTab: tab });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {selectedTab.title}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTab}
          onTabSelected={this.onTabSelected}
        />
        <p>
          {selectedTab.content}
        </p>
      </div>
    );
  }
}

export default App;
