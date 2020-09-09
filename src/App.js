import React from 'react';
import './App.css';
import { Tabs } from './components/Tabs';

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
    activeIndex: 0,
  }

  changeTab = (event) => {
    this.setState({ activeIndex: +event.target.value });
  };

  render() {
    return (
      <>
        <h1>React tabs</h1>
        <Tabs
          tabs={tabs}
          changeTab={this.changeTab}
          activeIndex={this.state.activeIndex}
        />
      </>
    );
  }
}

export default App;
