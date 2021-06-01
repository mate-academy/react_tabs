import React from 'react';
import Tabs from './components/Tabs';

import './App.scss';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Mark Twain', content: 'The first half of life consists of the capacity to enjoy without the chance, the last half consists of the chance without the capacity' },
  { id: 'tab-2', title: 'Winston Churchill', content: 'I like pigs. Dogs look up to us. Cats look down on us. Pigs treat us as equals.' },
  { id: 'tab-3', title: 'Albert Einstein', content: 'Only two things are infinite - the universe and human stupidity, and I am not sure about the former.' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    currentTab: tabs[0],
  };

  setTab = (choosedTab) => {
    this.setState({
      currentTab: choosedTab,
    });
  };

  render() {
    const { currentTab } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          Selected tab is&nbsp;
          {currentTab.title}
        </h1>

        <Tabs
          tabs={tabs}
          currentTab={currentTab}
          choiceTab={this.setTab}
        />
      </div>
    );
  }
}

export default App;
