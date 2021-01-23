import React from 'react';
import './App.css';
import { Tabs } from './Tabs';
import { Tab } from './Tab';

class App extends React.Component {
  state = {
    content: '',
  }

  onTabChange = (content) => {
    this.setState({ content });
  }

  render() {
    const { content } = this.state;

    return (
      <main className="main">
        <h1>React tabs (with children)</h1>
        <Tabs
          defaultIndex={0}
          onTabSelected={this.onTabChange}
        >
          <Tab title="Tab 2">
            It could be a text
          </Tab>

          <Tab title="Tab 3">
            <div>1</div>
            <div>2</div>
          </Tab>

          <Tab title="Tab 1">
            Or even any JSX
          </Tab>
        </Tabs>
        <div className="content">
          {content}
        </div>
      </main>
    );
  }
}

export default App;
