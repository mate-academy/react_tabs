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
    selectedTabIndex: 0,
  };

  handleTabSelection = (index) => {
    this.setState({ selectedTabIndex: index });
  };

  render() {
    const { tabs } = this.state;

    return (
      <div className="App">
        <h1>React tabs</h1>
        <Tabs
          tabs={tabs}
          onTabSelected={this.handleTabSelection}
          selectedIndex={this.state.selectedTabIndex}
        />
      </div>
    );
  }
}

export default App;
