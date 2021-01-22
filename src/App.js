import React from 'react';
import './App.css';
import { TabPicker } from './components/TabPicker';

// eslint-disable-next-line no-unused-vars
const tabsFromServer = [
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
    selectedTab: '',
    tabs: tabsFromServer,
  }

  selectTab = (tab) => {
    this.setState({
      selectedTab: tab,
    });
  }

  render() {
    const { tabs, selectedTab } = this.state;

    return (
      <>
        <h1> React tabs</h1>
        <TabPicker
          tabs={tabs}
          selectedTab={selectedTab}
          onChange={(tab) => {
            this.selectTab(tab);
          }}
        />
      </>
    );
  }
}

export default App;
