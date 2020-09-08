import React from 'react';
import './App.css';
import { Tabs } from './Tabs';

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

const preparedTabs = tabs.map((tab, i) => ({
  id: i, ...tab,
}));

class App extends React.Component {
  state = {
    activeTabIndex: 0,
  }

  onTabSelected = (id) => {
    this.setState({ activeTabIndex: id });
  };

  render() {
    const { activeTabIndex } = this.state;

    return (
      <>
        <h1>React tabs</h1>
        <Tabs
          tabs={preparedTabs}
          activeTabIndex={activeTabIndex}
          onSelect={this.onTabSelected}
        />
      </>
    );
  }
}

export default App;
