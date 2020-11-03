import React from 'react';
import { Tabs } from './Components/Tabs';

import './App.css';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Tab 1',
    content: 'Some text 1',
  },
  {
    title: 'Tab 2',
    content: 'Some text 2',
  },
  {
    title: 'Tab 3',
    content: 'Some text 3',
  },
];

const preparedTabs = tabs.map((tab, index) => ({
  ...tab,
  index,
}));

class App extends React.Component {
  state = {
    tabsFromServer: preparedTabs,
    selectedTabIndex: 0,
  }

  onTabSelected = (tab) => {
    this.setState({
      selectedTabIndex: tab.index,
    });
  }

  render() {
    const { tabsFromServer, selectedTabIndex } = this.state;

    return (
      <div className="App">
        <h1>React tabs</h1>
        <div className="App__tabs">
          <Tabs
            tabs={tabsFromServer}
            selected={selectedTabIndex}
            onChange={this.onTabSelected}
          />
        </div>
      </div>
    );
  }
}

export default App;
