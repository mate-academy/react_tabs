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

const tabsWithIds = tabs.map(tab => ({
  ...tab, id: +tab.title.split(' ')[1],
}));

class App extends React.Component {
  state = {
    allTabs: tabsWithIds,
    content: '',
  }

  onTabSelected = (tabId) => {
    this.setState(state => ({
      content: state.allTabs.find(tab => tab.id === tabId).content,
    }));
  }

  render() {
    const { allTabs, content } = this.state;

    return (
      <div>
        <Tabs tabs={allTabs} onClick={this.onTabSelected} />

        <p>{content}</p>
      </div>
    );
  }
}

export default App;
