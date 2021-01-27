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

const tabsFromServer = tabs.map((tab, index) => ({
  ...tab,
  id: index,
}));

export class App extends React.Component {
  state = {
    arrayTabs: tabsFromServer,
    content: '',
  };

  onTabSelected = (id) => {
    this.setState(state => ({
      content: state.arrayTabs.find(tab => tab.id === id).content,
    }));
  }

  render() {
    const { arrayTabs, content } = this.state;

    return (
      <div>
        <h1>React tabs</h1>

        <Tabs
          tabs={arrayTabs}
          onTabSelected={this.onTabSelected}
        />

        <p>{content}</p>
      </div>
    );
  }
}

export default App;
