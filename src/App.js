import React from 'react';
import './App.css';
import { Tabs } from './components/Tabs';

/* eslint-disable */
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];
/* eslint-enable */

class App extends React.Component {
  state = {
    selectedTabIndex: 'tab-1',
    selectedTabTitle: 'Tab 1',
    selectedTabContent: 'Some text 1',
  };

  selectTab = (tabIndex) => {
    const focusedTab = tabs.find(tab => tabs.indexOf(tab) === tabIndex);

    this.setState({
      selectedTabIndex: tabIndex,
      selectedTabTitle: focusedTab.title,
      selectedTabContent: focusedTab.content,
    });
  }

  render() {
    const {
      selectedTabIndex,
      selectedTabTitle,
      selectedTabContent,
    } = this.state;

    return (
      <>

        <div className="App">
          <h1 className="title">
            Selected tab is
            {' '}
            {selectedTabTitle}
          </h1>

          <Tabs
            tabs={tabs}
            selectedTabId={selectedTabIndex}
            selectedTabInfo={selectedTabContent}
            onTabSelected={this.selectTab}
          />
        </div>
      </>
    );
  }
}

export default App;
