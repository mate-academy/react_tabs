import React from 'react';

import './App.scss';
import { Tabs } from './Components/Tabs';

const tabs = [
  {
    id: 'tab-1',
    title: 'Home',
    content: 'Hello Vova)',
  },
  {
    id: 'tab-2',
    title: 'Profile',
    content: 'I\'m waiting for your approved',
  },
  {
    id: 'tab-3',
    title: 'Contact',
    content: 'Vova dankeschön',
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
    const selectedTab = tabs.find(tab => tab.id === selectedTabId);

    return (
      <>
        <h1>
          Selected
          {' '}
          {selectedTab.title}
        </h1>
        <div className="Tabs">
          <Tabs
            tabs={tabs}
            onTabSelected={this.onTabSelected}
          />
        </div>
        <div className="Tabs__line" />
        <p>{selectedTab.content}</p>
      </>
    );
  }
}

export default App;
