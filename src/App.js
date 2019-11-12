import React from 'react';
import './App.css';
import Tabs from './components/Tabs';

export default class App extends React.Component {
  state = {
    tabs: [
      {
        title: 'Home',
        content: 'Windows talking painted pasture yet its express parties use.',
        id: 1,
      },
      {
        title: 'profile',
        content: 'Sure last upon he same as knew next.',
        id: 2,
      },
      {
        title: 'Contact',
        content: 'Of believed or diverted no rejoiced.',
        id: 3,
      },
    ],
    activeTab: 1,
  };

  selectedTab = (index) => {
    this.setState({
      activeTab: index,
    });
  }

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
