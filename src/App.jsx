import React from 'react';
import { Tabs } from './components/Tabs';

import 'bulma/css/bulma.css';

/* eslint-disable */
const tabsFromServer = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

export class App extends React.Component {
  state = {
    tabs: tabsFromServer.map(tab => ({ ...tab })),
    selectedTab: tabsFromServer[0],
  }

  onTabSelected = (newTab) => {
    this.setState({ selectedTab: newTab });
  }

  render() {
    const { selectedTab, tabs } = this.state;

    return (
      <div className="columns is-centered">
        <div className="column is-half box m-6">
          <h1 className="has-text-centered is-size-2 mb-5">
            Selected tab is&nbsp;
            {selectedTab.title}
          </h1>

          <Tabs
            tabs={tabs}
            onTabSelected={this.onTabSelected}
            selectedTabId={selectedTab.id}
          />
        </div>
      </div>
    );
  }
}
