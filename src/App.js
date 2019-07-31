import React from 'react';
import './App.css';
import Tabs from './component/Tabs';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ],
    indexOfSelect: 0,
  };

  selectedTab = (index) => {
    this.setState({
      indexOfSelect: index,
    });
  }

  render() {
    const { tabs, indexOfSelect } = this.state;

    return (
      <div className="App">
        <Tabs
          tabs={tabs}
          activeTab={indexOfSelect}
          selectedTab={this.selectedTab}
        />
      </div>
    );
  }
}

export default App;
