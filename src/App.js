import React from 'react';
import List from './components/List';
import './App.css';

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
    tabsArr: [...tabs],
    index: 0,
  };

  changeMaineContain = (event) => {
    const { innerText } = event.target;

    this.setState(state => ({
      index: tabs.findIndex(tab => innerText === tab.title),
    }));
  };

  render() {
    const { tabsArr, index } = this.state;
    const tabsForRender = tabsArr.map((tab, i) => ({
      ...tab,
      index: i,
    }));

    return (
      <div className="Tab">
        <h1 className="Tab__header">React tabs</h1>
        <List tabs={tabsForRender} onTabSelected={this.changeMaineContain} />
        <div className="Tab__main-content">{tabs[index].content}</div>
      </div>
    );
  }
}

export default App;
