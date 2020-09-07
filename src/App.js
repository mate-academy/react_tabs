import React from 'react';
import './App.css';
import { Tabs } from './Tabs';

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

class App extends React.PureComponent {
  state = {
    content: tabs[0].content,
  }

  onTabSelected = (content) => {
    this.setState({ content });
  }

  render() {
    const { content } = this.state;

    return (
      <main className="app">
        <h1>React tabs</h1>
        <Tabs
          tabs={tabs}
          onSelected={this.onTabSelected}
          currentContent={content}
        />
        <p className="app__content">{content}</p>
      </main>
    );
  }
}

export default App;
