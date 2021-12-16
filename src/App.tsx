import React from 'react';

import './App.scss';
import { Tabs } from './components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Smile or go 😄' },
  { id: 'tab-2', title: 'Tab 2', content: 'Anyone who does approve the task is a good person 😉' },
  { id: 'tab-3', title: 'Tab 3', content: 'Everyone who writes good comments is a good person 😊' },
];

type State = {
  selectedTab: Tab,
};

class App extends React.Component<{}, State> {
  state = {
    selectedTab: tabs[0],
  };

  onTabSelected = (tab: Tab) => {
    this.setState({ selectedTab: tab });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <div className="App__wrapper">
          <h1>Come on, choose something</h1>
          <div className="App__content-wrapper">
            <Tabs
              tabs={tabs}
              tabId={selectedTab.id}
              onTabSelected={this.onTabSelected}
            />
            <p className="App__content">
              {selectedTab.content}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
