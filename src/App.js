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
    indexTab: 0,
  };

  selectTab = (index) => {
    this.setState({
      indexTab: index,
    });
  };

  render() {
    const { tabs, indexTab } = this.state;

    return (
      <div className="App">
        <Tabs
          tabs={tabs}
          indexTab={indexTab}
          selectTab={this.selectTab}
        />
      </div>
    );
  }
}

export default App;
