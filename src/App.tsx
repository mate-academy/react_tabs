import React from 'react';
import Tabs from './components/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface State {
  selectedTab: any,
}

class App extends React.Component<{}, State> {
  state = {
    selectedTab: tabs[0],
  };

  changeSelectedTab = (value: string) => {
    const newTab = tabs.find(({ id }) => id === value);

    this.setState({
      selectedTab: newTab,
    });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>Selected tab is&nbsp;Tab 1</h1>
        <div>{tabs.length}</div>

        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          onTabSelected={this.changeSelectedTab}
        />
      </div>
    );
  }
}

export default App;
