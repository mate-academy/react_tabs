import React from 'react';

import './App.scss';
import { Tabs } from './components/Tabs';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Frontend', content: 'Some text 1' },
  { id: 'tab-2', title: 'Java', content: 'Some text 2' },
  { id: 'tab-3', title: 'QA', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    selectedTab: tabs[0],
  };

  onTabSelected = (selectTab) => {
    this.setState({
      selectedTab: selectTab,
    });
  }

  render() {
    const { selectedTab } = this.state;
    const { onTabSelected } = this;

    return (
      <div className="app">
        <h1>
          Selected tab is&nbsp;
          {selectedTab.title}
        </h1>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTab.id}
          onTabSelected={onTabSelected}
        />
      </div>
    );
  }
}

export default App;
