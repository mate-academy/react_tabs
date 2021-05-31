import React from 'react';

import Tabs from './components/Tabs';
import './App.scss';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Home', content: 'Some text 1' },
  { id: 'tab-2', title: 'Profile', content: 'Some text 2' },
  { id: 'tab-3', title: 'Contact', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    selectedTabId: tabs[0].id,
    selectedTitle: tabs[0].title,
  };

  selectTab = ({ id, title }) => {
    this.setState({
      selectedTabId: id,
      selectedTitle: title,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>{`Selected tab is: ${this.state.selectedTitle}`}</h1>
        <Tabs
          tabs={tabs}
          selectTab={this.selectTab}
          selectedTabId={this.state.selectedTabId}
        />
      </div>
    );
  }
}

export default App;
