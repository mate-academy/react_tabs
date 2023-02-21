import React from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Tab } from './types/Tab';
import { Tabs } from './components/Tabs';

export const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

type State = {
  selectedTabId: string,
};

export class App extends React.Component<{}, State> {
  state = {
    selectedTabId: 'tab-1',
  };

  onTabSelected = (tab: Tab) => {
    if (tab.id !== this.state.selectedTabId) {
      this.setState({
        selectedTabId: tab.id,
      });
    }
  };

  render() {
    let activeTab = tabs.find(
      (tab: Tab) => tab.id === this.state.selectedTabId,
    );

    if (!activeTab) {
      // eslint-disable-next-line prefer-destructuring
      activeTab = tabs[0];
    }

    const header = `Selected tab is ${activeTab.title}`;

    return (
      <div className="section">
        <h1 className="title">
          {header}
        </h1>

        <Tabs
          tabs={tabs}
          selectedTabId={this.state.selectedTabId}
          onTabSelected={this.onTabSelected}
        />
      </div>
    );
  }
}
