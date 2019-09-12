import React from 'react';
import Tabs from './Components/Tabs/Tabs';
import './App.css';

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
      <>
        <div className="App">
          {/* eslint-disable-next-line */}
          <h1 className="header-title">{tabs.length} tabs</h1>
        </div>
        <Tabs tabs={tabs} />
      </>
    );
  }
}

export default App;
