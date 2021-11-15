import React from 'react';
import Tabs from './components/Tabs.tsx';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface State {
  selectedTab?: Tab,
}

class App extends React.Component<{}, State> {
  state = {
    selectedTab: tabs[0],
  };

  onTabSelected = (element: Tab) => {
    if (element.id !== this.state.selectedTab.id) {
      this.setState({
        selectedTab: tabs.find(tab => tab.id === element.id),
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {this.state.selectedTab.title}
        </h1>
        <div>{tabs.length}</div>
        <Tabs
          tabs={tabs}
          selectedTabId={this.state.selectedTab.id}
          onTabSelected={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
