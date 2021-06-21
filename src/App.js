import React from 'react';
import { Tabs } from './components/Tabs/Tabs';
import './App.scss';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Home', content: 'Some text 1' },
  { id: 'tab-2', title: 'Profile', content: 'Some text 2' },
  { id: 'tab-3', title: 'Contact', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    selectedTab: tabs[0],
  }

  onTabSelected = (tab) => {
    this.setState({
      selectedTab: tab,
    });
  }

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>
          {`Selected tab is ${selectedTab.title}`}
        </h1>
        <Tabs
          tabs={tabs}
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
