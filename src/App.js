import React from 'react';
import './App.css';

import { Tabs } from './Tabs';
// eslint-disable-next-line no-unused-vars
const tabsFromServer = [
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

const preparedTabs = tabsFromServer.map((tab, index) => ({
  ...tab,
  id: index,
}));

class App extends React.Component {
  state = {
    tabs: preparedTabs,
    selectedTabId: 0,
  }

  onTabSelected = (tab) => {
    const { id } = tab;

    this.setState({
      selectedTabId: id,
    });
  }

  render() {
    const { selectedTabId, tabs } = this.state;

    return (
      <div className="container jumbotron p-5">
        <h1 className="text-center">React tabs</h1>
        <Tabs
          tabs={tabs}
          selected={selectedTabId}
          onChange={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
