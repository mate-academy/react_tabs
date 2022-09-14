import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tabs } from './components/Tabs';
import { Tab } from './types/Tab';

export const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export class App extends React.Component {
  state = {
    selectedTab: tabs.at(0),
  };

  onTabSelected = (tab: Tab) => {
    this.setState({ selectedTab: tab });
  };

  render() {
    const { selectedTab } = this.state;

    return (
      <div className="section">
        <h1 className="title">
          {`Selected tab is ${selectedTab?.title}`}
        </h1>

        <Tabs
          tabs={tabs}
          selectedTabId={selectedTab?.id}
          onTabSelected={this.onTabSelected}
        />
      </div>
    );
  }
}
