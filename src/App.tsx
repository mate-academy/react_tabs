import React from 'react';
import { Tabs } from './components/Tabs';

import './App.scss';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

interface State {
  currentTab: Tab;
  currentTabId: string;
}

class App extends React.Component<{}, State> {
  state: State = {
    currentTab: tabs[0],
    currentTabId: tabs[0].id,
  };

  selectTab = (tab: Tab) => {
    this.setState({
      currentTab: tab,
      currentTabId: tab.id,
    });
  };

  render() {
    const {
      currentTab,
      currentTabId,
    } = this.state;

    return (
      <div className="App">
        <h1 className="app__article">
          Selected tab is
          {' '}
          {currentTab.title}
        </h1>

        <Tabs
          tabs={tabs}
          currentTabId={currentTabId}
          selectTab={this.selectTab}
        />
      </div>
    );
  }
}

export default App;
