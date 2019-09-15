import React from 'react';
import './App.css';
import Tabs from './components/Tabs/Tabs';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ],

    activeTab: 0,
  };

  onTabSelected = (index) => {
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
          onTabSelected={this.onTabSelected}
          activeTab={activeTab}
        />
      </div>
    );
  }
}

export default App;
