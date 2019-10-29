import React from 'react';
import Tabs from './components/Tabs/Tabs';
import './App.css';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ],
    currentTabIndex: 0,
  };

  render() {
    return (
      <div className="App">
        <Tabs
          tabs={this.state.tabs}
          onTabSelected={(currentIndex) => {
            this.setState(state => ({
              ...state,
              currentTabIndex: currentIndex,
            }));
          }}
        />
        <div className="tab-content">
          {this.state.tabs[this.state.currentTabIndex].content}
        </div>
      </div>
    );
  }
}

export default App;
