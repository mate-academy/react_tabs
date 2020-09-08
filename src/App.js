import React, { PureComponent } from 'react';
import { Tabs } from './components/Tabs';
import './App.css';

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

class App extends PureComponent {
  state = {
    tabs,
    choosenTab: 0,
  }

  onTabSelected = (event) => {
    this.setState({
      choosenTab: +event.target.id,
    });
  }

  render() {
    return (
      <>
        <h1>React tabs</h1>
        <Tabs
          tabs={this.state.tabs}
          choosenTab={this.state.choosenTab}
          onTabSelected={this.onTabSelected}
        />
      </>
    );
  }
}

export default App;
