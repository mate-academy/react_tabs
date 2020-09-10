import React from 'react';
import './App.css';
import { Tabs } from './Components/Tabs/Tabs';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Tab 1',
    content: 'Some text 1',
  },
  {
    title: 'Tab 2',
    content: 'Some text 2',
  },
  {
    title: 'Tab 3',
    content: 'Some text 3',
  },
];

class App extends React.Component {
  state = {
    activeTab: 'Tab 1',
  }

  tabHandler = (tab) => {
    this.setState({
      activeTab: tab,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React tabs</h1>
        <Tabs
          tabs={tabs}
          activeTab={this.state.activeTab}
          tabHandler={this.tabHandler}
        />
      </div>
    );
  }
}

export default App;
