import React from 'react';
import './App.css';
import ButtonPanel from './components/ButtonPanel';

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
    activeTab: 0,
  };

  selectedTab = (index) => {
    this.setState({
      activeTab: index,
    });
  }

  render() {
    return (
      <div className="App">
        <ButtonPanel
          tabs={this.state.tabs}
          selectedTab={this.selectedTab}
          activeTab={this.state.activeTab}
        />
      </div>
    );
  }
}
