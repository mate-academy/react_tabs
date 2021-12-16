import React from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  title: string,
  selectedTab: string,
};

class App extends React.Component<{}, State> {
  state = {
    title: `Selected tab is ${tabs[0].title}`,
    selectedTab: tabs[0].id,
  };

  onTabSelected = (title: string, id: string) => {
    this.setState({
      title: `Selected tab is ${title}`,
      selectedTab: id,
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">
          {this.state.title}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTab={this.state.selectedTab}
          onClick={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
