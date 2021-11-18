import React from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

class App extends React.Component {
  state = {
    selectTab: tabs[0],
  };

  onSelectedTab = (selectedTab: Tab) => {
    if (this.state.selectTab.id !== selectedTab.id) {
      this.setState({
        selectTab: tabs.find(tab => tab.id === selectedTab.id),
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">
          Selected tab is
          {' '}
          {this.state.selectTab.title}
        </h1>

        <Tabs
          tabs={tabs}
          selectTab={this.state.selectTab}
          chooseTab={this.onSelectedTab}
        />
      </div>
    );
  }
}

export default App;
