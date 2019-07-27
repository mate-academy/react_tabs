import React, { Component } from 'react';
import TabNav from './TabNav';

export default class App extends Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ],
  };

  render() {
    const { tabs } = this.state;

    return (
      <div className="App">

        {/* eslint-disable-next-line */}
        <h1>{tabs.length} tabs</h1>

        <TabNav tabs={tabs} />

      </div>
    );
  }
}
