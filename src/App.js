import React from 'react';
import Tabs from './Tabs';
import './App.scss';

class App extends React.Component {
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
        <Tabs props={tabs} />
      </div>
    );
  }
}

export default App;
