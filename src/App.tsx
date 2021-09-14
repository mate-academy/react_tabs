import React from 'react';
import { Tabs } from './Tabs';
import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTab: Tab;
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  newSelectedTab = (newTab: Tab) => {
    this.setState({
      selectedTab: newTab,
    });
  };

  render() {
    return (
      <div>
        <h1>{`Selected tab is ${this.state.selectedTab.title}`}</h1>
        <div>
          <Tabs
            tabs={tabs}
            selectedTabId={this.state.selectedTab.id}
            newSelectedTab={this.newSelectedTab}
          />
        </div>
      </div>
    );
  }
}

export default App;
