import React from 'react';
import Tabs from './components/Tabs/Tabs';
import './App.css';
import TabContent from './components/TabContent/TabContent';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Lorem ipsum dolor sit amet, ' },
      { title: 'Tab 2', content: 'consectetur adipiscing elit,' },
      { title: 'Tab 3', content: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' },
    ],
    currentTabIndex: 0,
  };

  render() {
    const { tabs, currentTabIndex } = this.state;

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
        <TabContent
          text={tabs[currentTabIndex].content}
        />
      </div>
    );
  }
}

export default App;
