import React from 'react';
import Tabs from './components/Tabs/Tabs';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some very interesting text 1' },
      { title: 'Tab 2', content: 'Some very interesting text 2' },
      { title: 'Tab 3', content: 'Some very interesting text 3' },
    ],
    activeTabIndex: 0,
  };

  onTabSelected = (index) => {
    this.setState({
      activeTabIndex: index,
    });
  };

  render() {
    const { tabs, activeTabIndex } = this.state;

    return (
      <div className="App">
        <Tabs
          tabs={tabs}
          onTabSelected={this.onTabSelected}
          activeTab={activeTabIndex}
        />
      </div>
    );
  }
}

export default App;
