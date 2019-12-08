import React from 'react';
import './App.css';
import Tabs from './components/Tabs';

export default class App extends React.Component {
  state = {
    tabs: [
      {
        title: 'Home',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        id: 1,
      },
      {
        title: 'Profile',
        content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        id: 2,
      },
      {
        title: 'Contact',
        content: 'Duis aute irure dolor in reprehenderit in voluptate.',
        id: 3,
      },
    ],
    activeTab: 0,
  };

  selectedTab = (index) => {
    this.setState({ activeTab: index });
  };

  render() {
    const { tabs, activeTab } = this.state;

    return (
      <div className="App">
        <Tabs
          tabs={tabs}
          selectedTab={this.selectedTab}
          activeTab={activeTab}
        />
      </div>
    );
  }
}
