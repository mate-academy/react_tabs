import React from 'react';

import './App.scss';
import { Tabs } from './Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTab: string,
};

class App extends React.Component<{}, State> {
  state = {
    selectedTab: 'tab-1',
  };

  changeTab = (id: string) => {
    this.setState({ selectedTab: id });
  };

  render() {
    const { selectedTab } = this.state;
    const selected = tabs.find(tab => tab.id === selectedTab) || tabs[0];

    return (
      <div className="App">
        <h1>
          Selected tab is
          {selected.title}
        </h1>
        <div>
          <Tabs
            tabs={tabs}
            selectedTab={selectedTab}
            changeTab={this.changeTab}
          />
        </div>
        <div>
          {selected.content}
        </div>
      </div>
    );
  }
}

export default App;
