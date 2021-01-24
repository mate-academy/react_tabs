import React from 'react';
import Tabs from './components/Tabs';
import './App.css';

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
  ...tab,
  id: index,
}));

class App extends React.Component {
  state = {
    currentIndex: 0,
  };

  onTabSelected = (index) => {
    this.setState(state => ({
      currentIndex: index,
    }));
  }

  render() {
    const { currentIndex } = this.state;

    return (
      <div className="app">
        <h1>React tabs</h1>
        <Tabs
          tabs={preparedTabs}
          index={currentIndex}
          onTabSelected={this.onTabSelected}
        />
      </div>
    );
  }
}

export default App;
