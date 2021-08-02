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
    idSelectedButton: tabs[0].id,
    textFromSelectedButton: '',
    selectedTab: tabs[0],
  }

  onTabSelected = (tab) => {
    this.setState(() => ({
      idSelectedButton: tab.id,
      textFromSelectedButton: tab.content,
      selectedTab: tab,
    }));
  }

  render() {
    const
      {
        selectedTab,
        idSelectedButton,
        textFromSelectedButton,
      } = this.state;

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {
            selectedTab.title
          }
        </h1>
        <Tabs
          onTabSelected={this.onTabSelected}
          idSelectedButton={idSelectedButton}
          tabs={tabs}
          textFromSelectedButton={textFromSelectedButton}
        />
      </div>
    );
  }
}

export default App;
