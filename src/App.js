import React from 'react';
import './App.css';
import { Tabs } from './components/Tabs';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    title: 'Tab 1',
    content: 'Some text 1',
  },
  {
    title: 'Tab 2',
    content: 'Some text 2',
  },
  {
    title: 'Tab 3',
    content: 'Some text 3',
  },
];

class App extends React.Component {
  state = {
    index: 0,
  }

  onTabSelected = (index) => {
    // const chosenTab = tabs.find(tab => (
    //   tab.title === event.target.innerText
    // ));

    this.setState({
      // index: tabs.indexOf(chosenTab),
      index,
    });
  }

  render() {
    const { index } = this.state;

    return (
      <>
        <h1>React tabs</h1>
        <Tabs
          index={this.state.index}
          tabs={tabs}
          onTabSelected={this.onTabSelected}
        />
        <div className="display-text">{tabs[index].content}</div>
      </>
    );
  }
}

export default App;
