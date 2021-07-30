import React from 'react';

import './App.scss';
import { Tabs } from './Components/Tabs/Tabs';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    idSelectedButton: '',
    textFromSelectedButton: '',
  }

  changeButton = (tab) => {
    this.setState(({ idSelectedButton, textFromSelectedButton }) => ({
      idSelectedButton: tabs.id,
      textFromSelectedButton: tab.content,
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Selected tab is&nbsp;Tab 1</h1>
        <Tabs
          changeButton={this.changeButton}
          tabs={tabs}
          textFromSelectedButton={this.state.textFromSelectedButton}
        />
      </div>
    );
  }
}

export default App;
