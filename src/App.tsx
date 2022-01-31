import React from 'react';
import './App.scss';

import { Tabs } from './Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type Props = {};

type State = {
  myTabs: Tab[],
  selectedTabId: string,
};

class App extends React.Component<Props, State> {
  state: State = {
    myTabs: tabs,
    selectedTabId: tabs[0].id,
  };

  onTabSelected = (id: string) => {
    this.setState({ selectedTabId: id });
  };

  render() {
    const { myTabs, selectedTabId } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is
          &nbsp;
          {selectedTabId}
        </h1>
        <Tabs
          tabs={myTabs}
          selectedTabId={selectedTabId}
          onTabSelected={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
