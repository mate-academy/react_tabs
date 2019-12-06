import React from 'react';
import './App.css';
import Tabs from './Tabs';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'hi' },
      { title: 'Tab 2', content: 'hello' },
      { title: 'Tab 3', content: 'привет' },
    ],
  };

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
