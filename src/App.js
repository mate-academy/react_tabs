import React from 'react';
import './App.css';
import Tabs from './Tabs';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ],
    selectedIndex: 0,
  };

  onTabSelected = (index) => {
    this.setState({
      selectedIndex: index,
    });
  }

  render() {
    const { tabs, selectedIndex } = this.state;

    return (
      <Tabs
        tabs={tabs}
        onTabSelected={this.onTabSelected}
        selectedIndex={selectedIndex}
      />
    );
  }
}

export default App;
