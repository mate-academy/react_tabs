import React from 'react';
import { Tabs } from './Tabs';

import './App.scss';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

export class App extends React.Component {
  state = {
    selectedTab: tabs[0],
  }

  selectTab = (event) => {
    this.setState({
      selectedTab: tabs.find(({ id }) => (
        id === event.target.id
      )),
    });
  }

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          Selected tab is&nbsp;
          {' '}
          <span className="App__title--red">
            {selectedTab.title}
          </span>
        </h1>
        <Tabs
          tabs={tabs}
          selectedTabId={selectedTab.id}
          onTabSelected={this.selectTab}
        />
        {selectedTab.content}
      </div>
    );
  }
}

export default App;
