import React, { Component } from 'react';
import './App.css';
import TabsList from './component/tabsList/TabsList';

class App extends Component {
  state = {
    tabs: [
      { title: 'Таб 1', content: 'Текст табу 1' },
      { title: 'Таб 2', content: 'Текст табу 2' },
      { title: 'Таб 3', content: 'Текст табу 3' },
    ],
    activeTab: 0,
  };

  onTabSelected = (index) => {
    this.setState({
      activeTab: index,
    });
  };

  render() {
    return (
      <div className="App">
        <TabsList
          tabs={this.state.tabs}
          onTabSelected={this.onTabSelected}
          activeTab={this.state.activeTab}
        />
      </div>
    );
  }
}

export default App;
