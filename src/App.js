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
    tabIndex: 0,
  }

  onTabSelected = (index) => {
    this.setState({
      tabIndex: index,
    });
  }

  render() {
    return (
      <Tabs
        tabs={preparedTabs}
        onSelected={this.onTabSelected}
        tabIndex={this.state.tabIndex}
      />
    );
  }
}

export default App;
