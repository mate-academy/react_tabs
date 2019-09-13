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
    indexEl: 0,
  };

  clickTab = (index) => {
    this.setState({
      indexEl: index,
    });
  };

  render() {
    const { tabs, indexEl } = this.state;

    return (
      <div>
        <Tabs tabs={tabs} indexItem={indexEl} clickTab={this.clickTab} />
      </div>
    );
  }
}

export default App;
