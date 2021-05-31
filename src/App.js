import React from 'react';

import './App.scss';
import { TabContent } from './TabContent';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    selectedTabId: tabs[0].id,
    selectedTabTitle: tabs[0].title,
  }

  selectedTab = ({ id, title }) => {
    this.setState({
      selectedTabId: id,
      selectedTabTitle: title,
    });
  }

  render() {
    const { selectedTabId, selectedTabTitle } = this.state;

    return (
      <>
        <h1>{`Selected tab is ${selectedTabTitle}`}</h1>
        <TabContent
          tabs={tabs}
          selectedTab={this.selectedTab}
          selectedTabId={selectedTabId}
        />
      </>
    );
  }
}

export default App;
