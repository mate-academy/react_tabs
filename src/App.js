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
    currentTab: 0,
  };

  handleClick = (index) => {
    this.setState({ currentTab: index });
  }

  render() {
    const { tabs, currentTab } = this.state;

    return (
      <div className="App">
        <Tabs
          tabs={tabs}
          currentTab={currentTab}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
