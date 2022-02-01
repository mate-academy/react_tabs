import React from 'react';

import './App.scss';
import { Tabs } from './components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectTab: Tab,
};

export class App extends React.Component<{}, State> {
  state: State = {
    selectTab: tabs[0],
  };

  handleTabChange = (tab: Tab) => {
    if (tab.id !== this.state.selectTab.id) {
      this.setState({
        selectTab: tab,
      });
    }
  };

  render(): React.ReactNode {
    const { selectTab } = this.state;

    return (
      <>
        <h1>{`Selected tab is: ${selectTab.title}`}</h1>
        <Tabs
          tabs={tabs}
          selectedTabId={selectTab.id}
          onTabSelected={this.handleTabChange}
        />
      </>
    );
  }
}

export default App;
