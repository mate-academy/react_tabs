import React, { Component } from 'react';
import './App.css';
import Tabs from './components/Tabs/Tabs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { title: 'Tab 1', content: 'Some text 1' },
        { title: 'Tab 2', content: 'Some text 2' },
        { title: 'Tab 3', content: 'Some text 3' },
      ],
    };
  }

  render() {
    const { tabs } = this.state;

    return (
      <div className="App">
        <Tabs tabs={tabs} />
      </div>
    );
  }
}

export default App;
