import React from 'react';
import 'bulma/css/bulma.min.css';

import './App.scss';
import { Tabs } from './components/Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTab: Tab;
};

class App extends React.Component<{}, State> {
  state: State = {
    selectedTab: tabs[0],
  };

  selectTab = (tab: Tab) => (
    this.setState({ selectedTab: tab })
  );

  render() {
    return (
      <div className="p-5">
        <h1>
          Selected tab is
          {' '}
          <span className="tag is-info is-light">
            {this.state.selectedTab.title}
          </span>
        </h1>
        <Tabs
          tabs={tabs}
          selectTab={this.selectTab}
          selectedTabId={this.state.selectedTab.id}
        />
      </div>
    );
  }
}

export default App;
