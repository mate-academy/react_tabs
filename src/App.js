import React from 'react';

import Tabs from './components/Tabs';

import './App.scss';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Home', content: 'Some text for Home' },
  { id: 'tab-2', title: 'Profile', content: 'Some text for Profile' },
  { id: 'tab-3', title: 'Content', content: 'Some text for Content' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    selectedTabId: 'tab-1',
    selectedTabTitle: 'Home',
  }

  selectTab = ({ id, title }) => {
    this.setState({
      selectedTabId: id, selectedTabTitle: title,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>
          Selected tab is&nbsp;
          {this.state.selectedTabTitle}
        </h1>

        <Tabs
          tabs={tabs}
          onTab={this.selectTab}
          selectedTabId={this.state.selectedTabId}
        />
      </div>
    );
  }
}

export default App;
