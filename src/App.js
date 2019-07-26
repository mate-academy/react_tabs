import React from 'react';
import Tabs from './components/Tabs';
import './App.css';

class App extends React.Component {
  state = {
    tabs: [
      { title: 'Tab 1', content: 'Some text 1' },
      { title: 'Tab 2', content: 'Some text 2' },
      { title: 'Tab 3', content: 'Some text 3' },
    ],
    isTab: 0,
  };

  handleClick = (id) => {
    this.setState({
      isTab: id,
    });
  }

  render() {
    const { tabs, isTab } = this.state;

    return (
      <Tabs>
        {
          tabs.map((tab, index) => (
            <Tabs.Tab
              title={tab.title}
              id={index}
              onTab={this.handleClick}
              select={index === isTab}
            >
              {tab.content}
            </Tabs.Tab>
          ))
        }
      </Tabs>
    );
  }
}

export default App;
