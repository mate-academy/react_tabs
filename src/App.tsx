import { Component } from 'react';

import './App.scss';
import { Tabs } from './components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface State {
  selectedTab: Tab;
}

class App extends Component<{}, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  onTabSelected = (tab: Tab) => {
    this.setState({ selectedTab: tab });
  };

  render() {
    const { id } = this.state.selectedTab;

    return (
      <div className="App container">
        <h1 className="Title is-size-2 block">{`Selected tab is ${id}`}</h1>
        <Tabs
          selectedTabId={id}
          tabs={tabs}
          onTabSelect={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
