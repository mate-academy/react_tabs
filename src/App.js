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
    indexItem: 0,
  };

  onTabSelected = (id) => {
    this.setState({ indexItem: id });
  };

  render() {
    const { tabs, indexItem } = this.state;

    return (
      <div className="App">
        <h1>{`${tabs.length} tabs`}</h1>
        <Tabs
          tabs={tabs}
          onTabSelected={this.onTabSelected}
          indexItem={indexItem}
        />
      </div>
    );
  }
}

export default App;
