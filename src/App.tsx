import React from 'react';
import { Tabs } from './components';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTab: string;
};

class App extends React.Component<{}, State> {
  state = {
    selectedTab: 'tab-1',
  };

  onTabSelected = (id: string) => {
    const newValue = tabs.find(tab => tab.id === id);

    if (newValue) {
      this.setState({
        selectedTab: newValue.id,
      });
    }
  };

  render() {
    const { selectedTab } = this.state;
    const title = tabs.find(tab => tab.id === selectedTab)?.title;

    return (
      <>
        <div className="App">
          <h1>
            Selected tab is&nbsp;
            {title}
          </h1>
        </div>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTab}
          onTabSelected={this.onTabSelected}
        />
      </>
    );
  }
}

export default App;
