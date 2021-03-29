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
    const selectedTitle = tabs.find(tab => tab.id === selectedTabId).title;
    const tabContent = tabs.find(tab => tab.id === selectedTabId).content;

    return (
      <>
        <h1>
          Selected
          {' '}
          {selectedTitle}
        </h1>
        <div className="Tabs">
          <Tabs
            tabs={tabs}
            onTabSelected={this.onTabSelected}
          />
        </div>
        <div className="Tabs__line" />
        <p>{tabContent}</p>
      </>
    );
  }
}

export default App;
