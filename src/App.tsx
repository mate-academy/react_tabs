import React from 'react';

import './App.scss';
import { Tabs } from './Tabs';

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
    const activeItem = tabs.find(item => item.id === this.state.selectedTabId) || tabs[0];

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {activeItem.title}
        </h1>
        <div className="box">
          <Tabs
            tabs={tabs}
            onTabSelected={this.onTabSelected}
            selectedTabId={this.state.selectedTabId}
          />
        </div>
        <div className="text">{activeItem.content}</div>
      </div>
    );
  }
}
