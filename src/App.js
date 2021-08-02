import React from 'react';
import './App.scss';
import Tabs from './components/Tabs';
/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    selectedTab: tabs[0],
  }

  changeTab = (newTab) => {
    this.setState({
      selectedTab: newTab,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>{`Current tab is: ${this.state.selectedTab.title}`}</h1>
        <Tabs
          tabs={tabs}
          selectedTab={this.state.selectedTab}
          changeTab={this.changeTab}
        />
      </div>
    );
  }
}

export default App;
