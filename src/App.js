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
    idSelectedButton: 'button is not selected',
    textFromSelectedButton: '',
  }

  changeButton = (tab) => {
    this.setState(() => ({
      idSelectedButton: tab.id,
      textFromSelectedButton: tab.content,
    }));
  }

  render() {
    const { idSelectedButton, textFromSelectedButton } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {
            idSelectedButton
          }
        </h1>
        <Tabs
          changeButton={this.changeButton}
          tabs={tabs}
          textFromSelectedButton={textFromSelectedButton}
        />
      </div>
    );
  }
}

export default App;
