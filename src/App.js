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
    indexElem: 0,
  };

  handleTab = (index) => {
    this.setState({ indexElem: index });
  };

  render() {
    const { tabs, indexElem } = this.state;

    return (
      <div className="main">
        <h1>
          {tabs.length} tabs
        </h1>
        <Tabs tabs={tabs} handleTab={this.handleTab} indexItem={indexElem} />
      </div>
    );
  }
}

export default App;
