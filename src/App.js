import React from 'react';
import { Tabs } from './components/Tabs/Tabs';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

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

  tabChanged = (tab) => {
    this.setState({
      selectedTab: tab,
    });
  }

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App ml-2">
        <h1>
          Selected tab is &nbsp;
          {selectedTab.title}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTab.id}
          tabChanged={this.tabChanged}
        />
      </div>
    );
  }
}

export default App;
