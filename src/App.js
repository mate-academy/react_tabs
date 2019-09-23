import React from 'react';
import './App.css';
import Tabs from './components/Tabs/Tabs';

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
    let index = 0;
    const tabsWithId = tabs.map(tab => (
      {
        id: index++,
        ...tab,
      }
    ));

    return (
      <div className="App">
        {/* eslint-disable-next-line */}
        <h1 className="title">{tabs.length} tabs</h1>
        <Tabs tabs={tabsWithId} />
      </div>
    );
  }
}

export default App;
