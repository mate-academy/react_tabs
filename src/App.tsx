import React from 'react';
import { Tabs } from './components/Tabs/Tabs';
import { Tab } from './types/types';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: ' Text 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' },
  { id: 'tab-2', title: 'Tab 2', content: ' Text 2. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."' },
  { id: 'tab-3', title: 'Tab 3', content: ' Text 3. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.' },
];

class App extends React.Component {
  state = {
    activeTab: tabs[0],
  };

  onTabSelected = (tab: Tab) => (
    this.setState({
      activeTab: tab,
    })
  );

  render() {
    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {this.state.activeTab.title}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTabId={this.state.activeTab.id}
          onTabSelected={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
