import React from 'react';

import './App.scss';
import { Tabs } from './component/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  SelectedTab: Tab,
};

class App extends React.Component<{}, State> {
  state = {
    SelectedTab: tabs[0],
  };

  onTabClick = (tab: Tab) => {
    this.setState({ SelectedTab: tab });
  };

  render() {
    const { SelectedTab } = this.state;

    return (
      <>
        <h1>{`Selected tab is ${SelectedTab.title}`}</h1>
        <Tabs
          tabs={tabs}
          selectedTab={SelectedTab}
          onTabClick={this.onTabClick}
        />
      </>
    );
  }
}

export default App;
