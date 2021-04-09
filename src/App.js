import React from 'react';

import './App.css';
import { Tabs } from './components/Tabs';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Home', content: 'Some text 1' },
  { id: 'tab-2', title: 'About', content: 'Some text 2' },
  { id: 'tab-3', title: 'Contacts', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    newTabs: [...tabs],
    selectedTabId: 'tab-1',
  }

  onTabSelected = (tabId) => {
    this.setState({
      selectedTabId: tabId,
    });
  }

  render() {
    const { newTabs, selectedTabId } = this.state;

    return (
      <div className="app">
        <h1 className="app__title">{`Selected tab is: ${selectedTabId}`}</h1>
        <Tabs
          newTabs={newTabs}
          selectedTabId={selectedTabId}
          onTabSelected={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
