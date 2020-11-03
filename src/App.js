import React from 'react';
import './App.css';

import Tabs from './Tabs';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Tab 1',
    content: 'Some text 1',
  },
  {
    title: 'Tab 2',
    content: 'Some text 2',
  },
  {
    title: 'Tab 3',
    content: 'Some text 3',
  },
];

const preparedTabs = tabs.map((tab, index) => ({
  ...tab, index,
}));

class App extends React.Component {
  state = {
    index: 0,
  }

  onTabSelected = (tabIndex) => {
    this.setState({
      index: tabIndex,
    });
  }

  render() {
    return (
      <div className="app">
        <Tabs
          tabs={preparedTabs}
          index={this.state.index}
          onSelected={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
