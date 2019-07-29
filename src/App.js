import React, { Component } from 'react';
import Tabs from './Tabs';

export default class App extends Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ],
    id: 0,
  };

  onTabSelected = id => this.setState({ id });

  render() {
    const { tabs, id } = this.state;

    return (
      <div>
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        <h1>{tabs.length} tabs</h1>

        <Tabs
          onTabSelected={this.onTabSelected}
          tabs={tabs}
          id={id}
        />

      </div>
    );
  }
}
