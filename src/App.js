import React from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

/* eslint-disable */
const tabsFromServer = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    selectedId: tabsFromServer[0].id,
    selectedTitle: tabsFromServer[0].title,
  }

  selectTab = (idToSelect, titleToSelect) => {
    this.setState({
      selectedId: idToSelect,
      selectedTitle: titleToSelect,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>
          Selected tab is
          {this.state.selectedTitle}
        </h1>

        <Tabs
          tabs={tabsFromServer}
          onSelelect={this.selectTab}
          selectedId={this.state.selectedId}
        />
      </div>
    );
  }
}

export default App;
