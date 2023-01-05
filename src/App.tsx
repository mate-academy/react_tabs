import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

import { Tabs } from './components/Tabs';
import { Tab } from './types/Tab';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export class App extends React.Component {
  state = {
    selectedTab: tabs[0],
    selectedTabId: 'tab-1',
  };

  changeTab = (tab: Tab) => {
    if (this.state.selectedTab !== tab) {
      this.setState({ selectedTab: tab, selectedTabId: tab.id });
    }
  };

  render() {
    const { selectedTab, selectedTabId } = this.state;

    return (
      <div className="section">
        <h1 className="title">
          {`Selected tab is ${selectedTab.title}`}
        </h1>

        <div data-cy="TabsComponent">
          <div className="tabs is-boxed">
            <Tabs
              tabs={tabs}
              selectId={selectedTabId}
              onTabSelected={this.changeTab}
            />
          </div>

          <div className="block" data-cy="TabContent">
            {selectedTab.content}
          </div>
        </div>
      </div>
    );
  }
}
