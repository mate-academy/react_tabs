import React from 'react';
import { Tabs } from './components/Tabs/Tabs';
import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Home', content: 'Some text 1' },
  { id: 'tab-2', title: 'Profile', content: 'Some text 2' },
  { id: 'tab-3', title: 'Contact', content: 'Some text 3' },
];

type State = {
  tabs: Tab[];
  selectedTab: Tab;
};

class App extends React.Component<{}, State> {
  state = {
    tabs,
    selectedTab: tabs[0],
  };

  onTabSelected = (tabId:string) => {
    this.setState(state => {
      return {
        selectedTab: state.tabs.find((tab) => tab.id === tabId) || tabs[0],
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {
            this.state.selectedTab.title
          }
        </h1>
        <Tabs
          tabs={this.state.tabs}
          selectedTab={this.state.selectedTab}
          onTabSelected={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
