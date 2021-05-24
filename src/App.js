import React from 'react';

import './App.scss';
import Tabs from './components/Tabs/Tabs';

/* eslint-disable */
const tabsFromServer = [
  {id: 'tab-1', title: 'Tab 1', content: 'Some text 1'},
  {id: 'tab-2', title: 'Tab 2', content: 'Some text 2'},
  {id: 'tab-3', title: 'Tab 3', content: 'Some text 3'},
];

/* eslint-enable */

class App extends React.Component {
  state = {
    idSelectedTab: tabsFromServer[0].id,
  }

  changeSelectedTab = (id) => {
    this.setState({ idSelectedTab: id });
  }

  render() {
    const { idSelectedTab } = this.state;
    const selectedTab = tabsFromServer.find(tab => tab.id === idSelectedTab);

    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {selectedTab.title}
        </h1>
        <Tabs
          tabs={tabsFromServer}
          idSelectedTab={idSelectedTab}
          onChangeSelTabs={this.changeSelectedTab}
        />
      </div>
    );
  }
}

export default App;
