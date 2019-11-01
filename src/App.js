import React from 'react';
import './App.css';
import Tabs from './components/Tabs';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1', id: 1 },
      { title: 'Tab 2', content: 'Some text 2', id: 2 },
      { title: 'Tab 3', content: 'Some text 3', id: 3 },
    ],
    currentTab: 1,
  };

  currentTab = (index) => {
    this.setState({
      currentTab: index,
    });
  };

  render() {
    const { tabs } = this.state;

    return (
      <Tabs currentTab={this.state.currentTab} handleClick={this.currentTab}>
        {tabs.map(tab => (
          <Tabs.Tab title={tab.title} id={tab.id} key={tab.id}>
            {tab.content}
          </Tabs.Tab>
        ))}
      </Tabs>
    );
  }
}

export default App;
