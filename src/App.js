import React from 'react';
import { Tabs } from './components/Tabs/Tabs';
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

class App extends React.Component {
  state = {
    index: 0,
  }

  onTabSelected = (index) => {
    this.setState({
      index,
    });
  }

  render() {
    const { index } = this.state;

    return (
      <section className="app">
        <Tabs
          tabs={tabs}
          onChange={this.onTabSelected}
          tabIndex={index}
        />
        <p className="app__content">{tabs[index].content}</p>
      </section>
    );
  }
}

export default App;
