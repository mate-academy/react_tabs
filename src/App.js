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
  };

  render() {
    const { tabs } = this.state;

    return (
      <div className="App">
        <Tabs>
          {tabs.map(tab => (
            <div key={Date()} title={tab.title}>{tab.content}</div>
          ))}
        </Tabs>
      </div>
    );
  }
}

export default App;
