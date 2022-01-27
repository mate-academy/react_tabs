import React from 'react';
import { Tabs } from './components/Tabs/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Props = {};

type State = {
  selectedTab: Tab,
};

export class App extends React.Component<Props, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  selectTab = (tab: Tab) => this.setState({ selectedTab: tab });

  render() {
    return (
      <div className="App">
        <h1 className="App__title">
          {`Selected Tab is: ${this.state.selectedTab.title}`}
        </h1>
        <Tabs
          selectedTabId={this.state.selectedTab.id}
          tabs={tabs}
          selectTab={this.selectTab}
        />
      </div>
    );
  }
}
