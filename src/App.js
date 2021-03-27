import React from 'react';

import './App.scss';
import { Tabs } from './Components/Tabs';

const tabs = [
  {
    id: 'tab-1',
    title: 'Home',
    content: 'Some text 1',
  },
  {
    id: 'tab-2',
    title: 'Profile',
    content: 'Some text 2',
  },
  {
    id: 'tab-3',
    title: 'Contact',
    content: 'Some text 3',
  },
];

class App extends React.Component {
  state = {
    selectedTabId: tabs[0].id,
  }

  onTabSelected = (id) => {
    this.setState({
      selectedTabId: id,
    });
  }

  render() {
    const { selectedTabId } = this.state;

    return (
      <div>
        <Tabs
          tabs={tabs}
          onTabSelected={this.onTabSelected}
        />
        <h1>{tabs.find(tab => tab.id === selectedTabId).content}</h1>
      </div>
    );
  }
}

export default App;
