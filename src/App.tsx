import React from 'react';
import './App.scss';
import { Tabs } from './components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface State {
  selectedTab: Tab,
}

export class App extends React.Component<{}, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  changeSelectedTab = (value: string) => {
    const { selectedTab } = this.state;
    const newTab = tabs.find(({ id }) => id === value) || tabs[0];

    if (selectedTab.id === newTab.id) {
      return;
    }

    this.setState({
      selectedTab: newTab,
    });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>{`Selected tab is ${selectedTab.title}`}</h1>
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          onTabSelected={this.changeSelectedTab}
        />
      </div>
    );
  }
}
