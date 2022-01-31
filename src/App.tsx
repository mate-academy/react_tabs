import React from 'react';
import { Tabs } from './Tabs/Tabs';

import './App.scss';

const tabsFromServer: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Props = {};
type State = {
  tabs: Tab[],
  selectedTab: Tab,
};

export class App extends React.Component<Props, State> {
  state: State = {
    tabs: [...tabsFromServer],
    selectedTab: tabsFromServer[0],
  };

  selectTab = (tab: Tab) => {
    this.setState({ selectedTab: tab });
  };

  render() {
    const { tabs, selectedTab } = this.state;

    return (
      <div className="app">
        <h1>
          Selected tab is&nbsp;
          {selectedTab.title}
        </h1>

        <Tabs
          tabs={tabs}
          selectedTabId={selectedTab.id}
          onTabSelected={this.selectTab}
        />

        <p className="app__content">{selectedTab.content}</p>
      </div>
    );
  }
}
