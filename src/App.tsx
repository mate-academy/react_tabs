import React from 'react';
import { Tabs } from './components/Tabs';
import { Tab } from './types/Tab';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectTab: Tab,
};

class App extends React.Component<{}, State> {
  state = {
    selectTab: tabs[0],
  };

  changeTab = (tab: Tab) => {
    this.setState({ selectTab: tab });
  };

  render() {
    const { selectTab } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {selectTab.title}
        </h1>

        <Tabs
          tabs={tabs}
          selectTabId={selectTab.id}
          oneSelectTab={this.changeTab}
        />

        <div>{tabs.length}</div>
      </div>
    );
  }
}

export default App;
