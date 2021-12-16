import React from 'react';
import { Tabs } from './components/Tabs/Tabs';
import { Tab } from './types/types';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Text 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { id: 'tab-2', title: 'Tab 2', content: 'Text 2. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."' },
  { id: 'tab-3', title: 'Tab 3', content: 'Text 3. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ' },
];

class App extends React.Component {
  state = {
    activeTab: tabs[0],
  };

  ontabSelected = (tab: Tab) => (
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
          onTabSelected={this.ontabSelected}
        />
      </div>
    );
  }
}

export default App;
