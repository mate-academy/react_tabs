import React from 'react';

import './App.scss';
import { Tabs } from './Tabs';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1 Some text 1 Some text 1 Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2 Some text 2 Some text 2 Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3 Some text 3 Some text 3 Some text 3' },
];

export class App extends React.Component<any, any> {
  state = {
    selectedId: 'tab-1',
  };

  onTabSelected = (event: any) => {
    if (event.target.id === this.state.selectedId) {
      return;
    }

    if (event.target.id) {
      this.setState({ selectedId: event.target.id });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>
          {'Selected tab is '}
          {tabs.find(tab => tab.id === this.state.selectedId)?.title}
        </h1>
        <Tabs tabs={tabs} selectedId={this.state.selectedId} onTabSelected={this.onTabSelected} />
      </div>
    );
  }
}
