import React from 'react';
import { Tabs } from './components/Tabs';

import './App.css';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    title: 'tab-1',
  }

  selectTab = (id) => {
    this.setState({
      title: id,
    });
  };

  render() {
    const { title } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is:
          {title}
        </h1>
        <Tabs
          selectTab={this.selectTab}
          tabs={tabs}
          title={title}
        />
      </div>
    );
  }
}

export default App;
