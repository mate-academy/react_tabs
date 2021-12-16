import React from 'react';
import { Tabs } from './components/tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface State {
  selectedTab: Tab,
}

class App extends React.Component<{}, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  onTabSelected = (id: Tab) => {
    this.setState({ selectedTab: id });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="container">
        <h1 className="title__text">
          Selected tab:
          {' '}
          {selectedTab.title}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTab.id}
          onTabSelected={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
