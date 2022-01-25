import React from 'react';
import { Tabs } from './Tabs';

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

  selectTab = (tab: Tab) => {
    this.setState({ selectedTab: tab });
  };

  render() {
    const { id, title, content } = this.state.selectedTab;

    return (
      <div className="App">
        <div className="box title">
          Selected tab is
          {' '}
          {title}
        </div>
        <Tabs
          tabs={tabs}
          selectedTabId={id}
          onTabSelected={this.selectTab}
        />
        <div className="box content">
          {content}
        </div>
      </div>
    );
  }
}
