import React from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

const sourseTabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export class App extends React.Component {
  state = {
    selectedTab: 'tab-1',
    titleText: 'Tab 1',
  };

  onTabSelected = (tab: Tab): void => {
    const { id, title } = tab;

    this.setState({
      selectedTab: id,
      titleText: title,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>{`Selected tab is ${this.state.titleText}`}</h1>
        <Tabs
          tabs={sourseTabs}
          chosenTab={this.state.selectedTab}
          selectTab={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
