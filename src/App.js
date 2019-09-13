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
    indexElement: 0,
  };

  clickTab = (index) => {
    this.setState({
      indexElement: index,
    });
  };

  render() {
    const { tabs, indexElement } = this.state;

    return (
      <div>
        <Tabs
          tabs={tabs}
          indexItem={indexElement}
          clickTab={this.clickTab}
        />
      </div>
    );
  }
}

export default App;
