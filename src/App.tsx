import React from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface State {
  selectedTab: Tab | undefined,
}

class App extends React.Component<{}, State> {
  state = {
    selectedTab: tabs[0],
  };

  onTabSelected = (tabId: string) => {
    const { selectedTab } = this.state;

    if (selectedTab.id !== tabId) {
      this.setState({
        selectedTab: tabs.find(item => item.id === tabId),
      });
    }
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <>
        <h1>
          {`${selectedTab.title} is selected`}
        </h1>

        <Tabs
          tabs={tabs}
          selectedTabId={selectedTab.id}
          onTabSelected={this.onTabSelected}
        />
      </>
    );
  }
}

export default App;
