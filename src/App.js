import React from 'react';
import './App.css';
import Tabs from './components/Tabs/Tabs';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1', background: '#5f93ff', borderTop: '1px solid #5f93ff'},
      { title: 'Tab 2', content: 'Some text 2', background: '#66bb82', borderTop: '1px solid #66bb82'},
      { title: 'Tab 3', content: 'Some text 3', background: '#b4a3cb', borderTop: '1px solid #b4a3cb'},
    ],
  };

  render() {
    const { tabs } = this.state;

    return (
      <div className="App">
        <h1 className="h1">Tabs</h1>
        <div className="wrapH1"><Tabs  tabs={tabs} /></div>

      </div>
    );
  }
}

export default App;
