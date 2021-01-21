import React from 'react';
import './App.css';
import { Tabs } from './components/Tabs/Tabs';

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
    tabsOnPage: tabsWithIds,
    content: '',
  }

  onTabSelected = (tabId) => {
    this.setState(state => ({
      content: state.tabsOnPage.find(tab => tab.id === tabId).content,
    }));
  }

  render() {
    const { tabsOnPage, content } = this.state;

    return (
      <div className="App">
        <h1 className="App__header">React tabs</h1>
        <Tabs
          tabs={tabsOnPage}
          onClick={this.onTabSelected}
        />
        <p>{content}</p>
      </div>
    );
  }
}

export default App;
