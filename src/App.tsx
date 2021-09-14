import React from 'react';
import { Tabs } from './components';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Props = {};

type State = {
  selectedTab: string;
};

class App extends React.Component<Props, State> {
  state: State = {
    selectedTab: 'tab-1',
  };

  onTabSelected = (tab: Tab) => {
    this.setState({
      selectedTab: tab.id,
    });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1 className="text-center">{`Selected tab is Tab ${selectedTab[selectedTab.length - 1]}`}</h1>
        <Tabs selectedTab={selectedTab} tabs={tabs} onTabSelected={this.onTabSelected} />
      </div>
    );
  }
}

export default App;
