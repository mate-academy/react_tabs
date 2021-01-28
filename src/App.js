import React from 'react';
import './App.css';
import { Tabs } from './Tabs';

const tabsFromServer = [
  {
    id: 1,
    title: 'Tab 1',
    content: 'Some text 1',
  },
  {
    id: 2,
    title: 'Tab 2',
    content: 'Some text 2',
  },
  {
    id: 3,
    title: 'Tab 3',
    content: 'Some text 3',
  },
];

class App extends React.Component {
  state = {
    tabs: [...tabsFromServer],
    selectedTab: 1,
  }

  onTabSelected = (id) => {
    this.setState({
      selectedTab: id,
    });
  }

  render() {
    const { tabs, selectedTab } = this.state;

    const selectedTabContent = tabs.find(tab => tab.id === selectedTab);

    return (
      <>
        <Tabs
          onTabSelected={this.onTabSelected}
          selectedTab={this.state.selectedTab}
          tabs={tabs}
        />
        <div className="tab__content">
          {selectedTabContent.content}
        </div>
      </>
    );
  }
}

export default App;
