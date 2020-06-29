import React from 'react';
import './App.css';
import { Tab } from './components/Tab';

// eslint-disable-next-line no-unused-vars
const tabs = [
  {
    id: 1,
    title: 'Tab 1',
    content: 'Some text 1',
  },
  {
    id: 2,
    title: 'Tab 2',
    content: 'Some text 2',
  },
  {
    id: 3,
    title: 'Tab 3',
    content: 'Some text 3',
  },
];

class App extends React.PureComponent {
  state = {
    tabNumber: 0,
  };

  changeTab = (number, event) => {
    this.setState(state => ({
      tabNumber: number,
    }));
  }

  render() {
    return (
      <div className="App">
        {tabs.map((tab, index) => (
          <Tab
            key={tab.id}
            tab={tab}
            onSelected={() => this.changeTab(index, 'target')}
          />
        ))}
        <p>{tabs[this.state.tabNumber].content}</p>
      </div>
    );
  }
}

export default App;
