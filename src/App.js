import React from 'react';
import './App.css';
import { Tabs } from './components/Tabs';

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

const numeratedTabs = tabs.map((tab, index) => ({
  ...tab,
  id: index,
}));

class App extends React.PureComponent {
  state = {
    PageTabs: numeratedTabs,
    content: '',

  }

  onTabSelected = (tab) => {
    this.setState({ content: tab.content });
  }

  render() {
    const { PageTabs, content } = this.state;

    return (
      <div className="container">
        <h1>React tabs</h1>
        <Tabs
          tabsList={PageTabs}
          getcontent={this.onTabSelected}
        />
        <p className="text">{content}</p>
      </div>
    );
  }
}

export default App;
