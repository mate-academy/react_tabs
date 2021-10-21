import React from 'react';
import { Tabs } from './Tabs';
import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export class App extends React.Component<{}, {}> {
  state = {
    selectedTabId: 'tab-1',
  };

  onTabSelected = (id: string) => {
    this.setState({
      selectedTabId: id,
    });
  };

  render() {
    const activeTab = tabs.find(tab => tab.id === this.state.selectedTabId) || tabs[0];

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {activeTab.title}
        </h1>

        <div className="tabs-container">
          <Tabs
            tabs={tabs}
            onTabSelected={this.onTabSelected}
            selectedTabId={this.state.selectedTabId}
          />
        </div>

        <div className="tab__content">
          {activeTab.content}
        </div>
      </div>
    );
  }
}
