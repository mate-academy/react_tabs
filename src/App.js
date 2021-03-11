import React from 'react';

import './App.scss';
import { TabList } from './components/TabList';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    selectedTab: 'Tab 1',
  }

  handleTab = (event) => {
    this.setState({
      selectedTab: event,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>
          {`Selected tab is ${this.state.selectedTab}`}
        </h1>
        <TabList tabs={tabs} handle={this.handleTab} />
      </div>
    );
  }
}

export default App;
