import React from 'react';

import './App.scss';
import { Tabs } from './components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Home', content: 'Home text and bla bla bla' },
  { id: 'tab-2', title: 'Profile', content: 'Profile text and bla bla bla' },
  { id: 'tab-3', title: 'Contact', content: 'Contact text and bla bla bla' },
  { id: 'tab-4', title: 'About', content: 'About text and bla bla bla' },
  { id: 'tab-5', title: 'Features', content: 'Features text and bla bla bla' },
];

interface State {
  selectedTab: Tab;
}

export class App extends React.Component<{}, State> {
  state = {
    selectedTab: tabs[0],
  };

  tabSelect = (tab: Tab) => {
    if (this.state.selectedTab.id !== tab.id) {
      this.setState({ selectedTab: tab });
    }
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1>{`Selected tab is: ${selectedTab.title}`}</h1>
        <Tabs
          tabs={tabs}
          content={selectedTab.content}
          tabId={selectedTab.id}
          onSelect={this.tabSelect}
        />
      </div>
    );
  }
}
