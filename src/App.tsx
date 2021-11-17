import React from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface State {
  tabsList: Tab[],
  selectedTab: Tab | undefined,
}

class App extends React.Component<{}, State> {
  state = {
    tabsList: [...tabs],
    selectedTab: tabs[0],
  };

  onTabSelected = (tab: Tab) => {
    const { tabsList, selectedTab } = this.state;

    if (tab.id !== selectedTab.id) {
      this.setState({
        selectedTab: tabsList.find(desiredTab => desiredTab.id === tab.id),
      });
    }
  };

  render() {
    const { tabsList, selectedTab } = this.state;

    return (
      <>
        <h1>
          {`${selectedTab.title} is selected`}
        </h1>

        <Tabs
          tabs={tabsList}
          selectedTab={selectedTab}
          selectedTabId={selectedTab.id}
          onTabSelected={this.onTabSelected}
        />
      </>
    );
  }
}

export default App;
