import React from 'react';
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

class App extends React.Component {
  state = {
    content: '',
  }

  findContent = (name) => {
    this.setState({
      content: tabs.find(tab => tab.title === name).content,
    });
  }

  render() {
    return (
      <div
        className="container"
      >
        <h1>React tabs</h1>
        <Tabs tabs={tabs} onClick={this.findContent} />
        <div
          className="content"
        >
          {this.state.content}
        </div>
      </div>
    );
  }
}

export default App;
