import React from 'react';
import { TabsList } from './components/TabsList';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTab: Tab;
};

export class App extends React.Component<{}, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  onTabSelected = (tab: Tab): void => {
    if (this.state.selectedTab !== tab) {
      this.setState({ selectedTab: tab });
    }
  };

  render(): React.ReactNode {
    const { selectedTab } = this.state;

    return (
      <div className="border border-4">
        <h1>{`Selected tab is: ${selectedTab.title}`}</h1>
        <TabsList
          tabs={tabs}
          onTabSelected={this.onTabSelected}
          content={selectedTab.content}
        />
      </div>
    );
  }
}
